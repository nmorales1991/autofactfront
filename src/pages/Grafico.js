import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/store/Auth";

const Grafico = (props) => {
  const context = useContext(Context);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    if (
      context.stateUser.isAuthenticated === false ||
      context.stateUser.isAuthenticated === null || context.stateUser.user.usuariobd.rol !=='ADMIN'
    ) {
      props.history.push("/login");
    }
    setShowChild(true);
  }, [context.stateUser.isAuthenticated, context.stateUser.user.usuariobd.rol, props.history]);
  
  if (!showChild) {
    return null;
  } else {
    return <div>Grafico</div>;
  }
};

export default Grafico;
