import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Listado from "./pages/Listado";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Grafico from "./pages/Grafico";
import Respuestas from "./pages/Respuestas";
import Auth from "./context/store/Auth";
import { Container } from "reactstrap";

function App() {
  return (
    <Container>
      <Auth>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/listado" component={Listado} />
            <Route path="/grafico" component={Grafico} />
            <Route path="/respuestas" component={Respuestas} />
            <Route path="/" component={Quiz} />
          </Switch>
        </BrowserRouter>
      </Auth>
    </Container>
  );
}

export default App;
