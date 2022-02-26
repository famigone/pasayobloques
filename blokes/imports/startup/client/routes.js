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

import MonoSelector from "../../ui/Dashboard/MonoSelector.jsx";


import AbmUsuarios from "../../ui/Dashboard/abmUsuarios.jsx";
import Experiencia from "../../ui/Dashboard/experiencia.jsx";
import Solucion from "../../ui/Dashboard/Solucion.jsx";
import SolucionC4 from "../../ui/Dashboard/SolucionC4.jsx";
import {Register} from "../../ui/Dashboard/Register.jsx";
import Colaborativo from "../../ui/Dashboard/Colaborativo.jsx";
import ColaborativoC4 from "../../ui/Dashboard/ColaborativoC4.jsx";
import Home from "../../ui/Dashboard/Home.jsx";
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
      <Route exact path="/register" component={Register} />
        <Route exact path="/experiencia" component={MonoSelector}/>
        <Route exact path="/colaborativo/:id" component={Colaborativo}/>        
        <Route exact path="/solucion/:id" component={Solucion}/>                
        <Route exact path="/solucionc4/:id" component={SolucionC4}/>        
        <Route exact path="/colaborativoc4/:id" component={ColaborativoC4}/>

      <PrivateRoute>
        <App>
          
          <Route exact path="/home/" component={Home} />
                    

          
        </App>
      </PrivateRoute>
      {requireAuth ? <Redirect to="/login" /> : <App />}
      <Route exact path="/login" component={LoginForm} />

    </Switch>
  </Router>
);
