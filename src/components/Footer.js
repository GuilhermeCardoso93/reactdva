import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import over1 from "../assets/overwatchlogo1.png";
import over2 from "../assets/overwatchlogo2.png";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer fixed-bottom">
    <Container>
      <Row className="align-items-center">
        <img
          src={over1}
          height="25"
          width="30"
          className="d-inline-block pt-1 mx-2"
          alt="d.va logo"
        />
        <img
          src={over2}
          height="25"
          width="150"
          className="d-inline-block pt-1"
          alt="d.va logo"
        />
        <a href='https://github.com/GuilhermeCardoso93'>
        <FontAwesomeIcon
          icon={faGithubSquare}
          color="#ffffff"
          size="2x"
          className="ml-2 align-left"
        />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-cardoso-35710b103">
        <FontAwesomeIcon
          icon={faLinkedin}
          color="#ffffff"
          size="2x"
          className="ml-2 align-left"
        />
        </a>
      </Row>
    </Container>
  </footer>
);

export default Footer;
