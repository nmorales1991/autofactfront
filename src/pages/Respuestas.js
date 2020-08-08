import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/store/Auth";
import { Table, Button } from "reactstrap";
import CerrarSesion from '../components/CerrarSesion'

const Respuestas = (props) => {
    
  const context = useContext(Context);
  const [showChild, setShowChild] = useState(false);
  const respuestas = props.location.state.respuestas;

  useEffect(() => {
    if (
      context.stateUser.isAuthenticated === false ||
      context.stateUser.isAuthenticated === null
    ) {
      props.history.push("/login");
    }
    setShowChild(true);
  }, [
    context.stateUser.isAuthenticated,
    context.stateUser.user.usuariobd.rol,
    props.history,
  ]);

  if (!showChild) {
    return null;
  } else {
    return (
      <div>
        <CerrarSesion/>
        <Table>
          <tbody>
            <tr>
              <td>¿Qué te gustaría que agregáramos al informe?</td>
              <td>{respuestas[0]}</td>
            </tr>
            <tr>
              <td>¿La información es correcta?</td>
              <td>{respuestas[1]}</td>
            </tr>
            <tr>
              <td>¿Del 1 al 5, es rápido el sitio?</td>
              <td>{respuestas[2]}</td>
            </tr>
          </tbody>
        </Table>
        <Button onClick={() => props.history.goBack()} type="button">
          Volver
        </Button>
      </div>
    );
  }
};

export default Respuestas;
