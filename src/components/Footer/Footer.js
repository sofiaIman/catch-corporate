
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Company
                </a>
              </li>
              
              
            </ul>
<<<<<<< Updated upstream
            <p className="copyright">
=======
            <p className="copyright ">
>>>>>>> Stashed changes
              © {new Date().getFullYear()}{" "}
              <a>Catch Corporate Dashboard</a>
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
