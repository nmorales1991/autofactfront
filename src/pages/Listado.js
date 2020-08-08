import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/store/Auth";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table, Button } from "reactstrap";
import CerrarSesion from '../components/CerrarSesion'

const Listado = (props) => {
  const context = useContext(Context);
  const [showChild, setShowChild] = useState(false);
  const [quiz, setquiz] = useState([]);

  const getQuiz = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios
        .get("http://localhost:3001/server/quiz", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: jwt,
          },
        })
        .then((res) => {
          setquiz(res.data.quiz);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (
      context.stateUser.isAuthenticated === false ||
      context.stateUser.isAuthenticated === null
    ) {
      props.history.push("/login");
    }

    getQuiz();

    setShowChild(true);
  }, [context.stateUser.isAuthenticated, props.history]);

  if (!showChild) {
    return null;
  } else {
    return (
      <div>
        <CerrarSesion/>
        <Table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Usuario</th>
              <th>Ver Respuestas</th>
            </tr>
          </thead>
          <tbody>
            {quiz.length > 0
              ? quiz.map((q) => (
                  <tr key={q._id}>
                    <th>{q.fecha}</th>
                    <td>{q.usuario.correo}</td>
                    <td>
                      <Link
                        to={{
                          pathname: "/respuestas",
                          state: { respuestas: q.respuestas },
                        }}
                      >
                        <Button type="button">Ver</Button>
                      </Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default Listado;
