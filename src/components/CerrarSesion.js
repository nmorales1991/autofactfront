import React, { useContext } from "react";
import { Button } from "reactstrap";
import { logoutUser } from "../context/actions/autenticacion.action";
import { Context } from "../context/store/Auth";

const CerrarSesion = () => {
  const context = useContext(Context);
  const cerrarSesion = () => {
    logoutUser(context.dispatch);
  };
  return (
    <div>
      <Button onClick={() => cerrarSesion()} type="button">
        Cerrar Sesión
      </Button>
    </div>
  );
};

export default CerrarSesion;
