import React, { useEffect, useContext, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Context } from "../context/store/Auth";
import { loginUser } from "../context/actions/autenticacion.action";

const Login = (props) => {
  const context = useContext(Context);
  const [correo, setcorreo] = useState("");
  const [clave, setclave] = useState("");
  const [error, seterror] = useState("");
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.history.push("/");
    }
    setShowChild(true);
  }, [context.stateUser.isAuthenticated, props.history]);

  const handleSubmit = (e) => {
    const user = {
      correo,
      clave,
    };
    if (correo === "" || clave === "") {
      seterror("Ingrese datos correctamente");
    } else {
      loginUser(user, context.dispatch, seterror);
    }

    e.preventDefault();
  };

  if (!showChild) {
    return null;
  } else {
    return (
      <div className="content-login">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="correo">Correo</Label>
            <Input
              type="email"
              name="correo"
              id="correo"
              placeholder="Ingrese su correo"
              onChange={(e) => setcorreo(e.target.value)}
              value={correo}
            />
          </FormGroup>
          <FormGroup>
            <Label for="clave">Clave</Label>
            <Input
              type="password"
              name="clave"
              id="clave"
              placeholder="Ingrese su clave"
              onChange={(e) => setclave(e.target.value)}
              value={clave}
            />
          </FormGroup>
          <Button type="submit">Ingresar</Button>
          {error ? error : null}
        </Form>
      </div>
    );
  }
};

export default Login;
