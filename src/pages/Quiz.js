import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/store/Auth";
import QuizForm from '../components/QuizForm'
import CerrarSesion from '../components/CerrarSesion'


const Quiz = (props) => {
  const context = useContext(Context);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    if (
      context.stateUser.isAuthenticated === false ||
      context.stateUser.isAuthenticated === null
    ) {
      props.history.push("/login");
    }
    setShowChild(true);
  }, [context.stateUser.isAuthenticated, props.history]);

  if (!showChild) {
    return null;
  } else {
    return <div><CerrarSesion/><QuizForm /></div>;
  }
};

export default Quiz;
