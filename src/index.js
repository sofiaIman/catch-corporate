
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import Login from './components/Login/Login';
import CheckOut from "components/corporate/Payment/CheckOut";

//import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import Checkmpesa from "components/corporate/Payment/Mpesa/CheckMpesa";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/login" render={()=><Login/>} />
      <Route path="/CheckOut" render={()=><CheckOut />} />
      <Route path="/CheckMpesa" render={()=><Checkmpesa />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

//import App from "./app";

/*ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
*/
