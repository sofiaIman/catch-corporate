import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import  AuthRoute from "./auth/authRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import Login from './components/Login/Login';
//import "@fortawesome/fontawesome-free/css/all.min.css";
import Admin from "layouts/Admin.js";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      
        <Switch>
        <Route path="/admin" render={(props) => <Admin {...props} />} />
        <Redirect from="/" to="/admin/dashboard" />
          <Route path="/Login" component={Login} />  
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;