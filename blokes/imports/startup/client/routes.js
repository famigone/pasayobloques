import React from "react";
import {
  Router,
  Route,
  IndexRoute,
  Switch,
  Redirect,
  BrowserRouter,
  Routes,
  useParams
} from "react-router-dom";



//import createBrowserHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
// route components
import App from "../../ui/Dashboard/App.jsx";

import LoginForm from "../../ui/Dashboard/LoginForm.jsx";

import PrivateRoute from "./PrivateRoute.jsx";
////////////////////////////////
import Tangible from "../../ui/Dashboard/Tangible.jsx";
import Bloques from "../../ui/Dashboard/Bloques.jsx";
import Texto from "../../ui/Dashboard/Texto.jsx";
import MonoSelector from "../../ui/Dashboard/MonoSelector.jsx";
import NuevoContacto from "../../ui/Dashboard/NuevoContacto.jsx";
import ListadoConsultas from "../../ui/Dashboard/listadoConsultas.jsx";
import NuevoContactoMujer from "../../ui/Dashboard/NuevoContactoMujer.jsx";

import ReglasHome from "../../ui/Dashboard/ReglasHome.jsx";
import ReglasMultiplesHome from "../../ui/Dashboard/ReglasMultiplesHome.jsx";

import AbmUsuarios from "../../ui/Dashboard/abmUsuarios.jsx";
import Experiencia from "../../ui/Dashboard/experiencia.jsx";
import NuevaPregunta from "../../ui/Dashboard/NuevaPregunta.jsx";
import Analisis from "../../ui/Dashboard/Analisis.jsx";
import Descargar from "../../ui/Dashboard/Descargar.jsx";
import CabeceraFuncional from "../../ui/Dashboard/cabecerafuncional.js";
////////////////////////////////
const browserHistory = createBrowserHistory();
export const requireAuth = (nextState, replace) => {
  // No user is authenticated redirect ro index
  return Meteor.user() === null;
};
function ChildMonitor() {
  let { id } = useParams();
  return <WellMonitor id={id} />;
}
function ChildConfig() {
  let { id } = useParams();
  return <WellConfig id={id} />;
}
function ChildOperational() {
  let { id } = useParams();
  return <OperationalHome id={id} />;
}
export const Ruteador = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <PrivateRoute>
        <App>

          <Route exact path="/bloques/" component={Bloques} />
          <Route exact path="/texto/" component={Texto} />
          <Route exact path="/selector/" component={ListadoConsultas} />

          <Route exact path="/nuevapregunta/:id" children={<NuevaPregunta />} />
          <Route exact path="/nuevapregunta" component={NuevaPregunta} />
          <Route exact path="/analisis" component={Analisis} />
          <Route exact path="/descargar" component={Descargar} />
          <Route exact path="/usuarios" component={AbmUsuarios} />
          <Route exact path="/secuencias/" component={MonoSelector}/>

          <Route
            exact
            path="/cabecerafuncional"
            component={CabeceraFuncional}
          />
          <Route exact path="/reglas" component={ReglasHome} />
          <Route
            exact
            path="/reglasmultiples"
            component={ReglasMultiplesHome}
          />
        </App>
      </PrivateRoute>
      {requireAuth ? <Redirect to="/login" /> : <App />}
      <Route exact path="/login" component={LoginForm} />

    </Switch>
  </Router>
);
