
import React from "react";
import { useLocation , Link,Route, Switch, Redirect} from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";
import HomePage from '../Login/Login';

import routes from "routes.js";

function Header() {
  const location = useLocation();
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        
       
            <Nav.Item>
              <Nav.Link
               
              >
                <Link className="no-icon" to="Login">Log out</Link>
                <Switch>
  <Redirect exact from="/" to="Login/Login" />
  <Route path="Login/Login">
    <HomePage />
  </Route>
  </Switch>
              </Nav.Link>
            </Nav.Item>
         
      </Container>
    </Navbar>
  );
}

export default Header;
