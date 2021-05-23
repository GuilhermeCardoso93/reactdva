import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Card, CardGroup, Row, Col, Container } from "react-bootstrap";
import canhao from "../assets/habilidades/canhao.png";
import props from "../assets/habilidades/props.png";
import matriz from "../assets/habilidades/matriz.png";
import ejetar from "../assets/habilidades/ejetar.png";
import auto from "../assets/habilidades/autodestruir.png";
import arma from "../assets/habilidades/armaluz.png";
import chama from "../assets/habilidades/chamarmecha.png";
import pixel4 from "../assets/pixel4.png";

import "./Hero2.scss";

const Hero2 = () => (
  <div className='mt-5 pt-5 pb-5'>
  <Container expand="lg" className="hab-container">
    <section className=" container-hab   text-light lg-p-2">
      <h2 className="hab-titulo align-text-center pt-4 d-lg-pl-5">Habilidades
      <img
        src={pixel4}
        height="100"
        width="120"
        className="mb-3 d-lg-inline-block d-none"
        alt="d.va logo"
      /></h2>
      <CardGroup className="mb-1">
        <Card className="m-1 ml-1">
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              CANHOES DE <br />
              FUSAO -
              <img
                src={canhao}
                height="35"
                width="50"
                className="d-inline-block pl-2"
                alt="d.va logo"
              />
            </Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  <h6>
                    <strong>Duração:∞</strong>
                  </h6>
                </Col>
                <Col>
                  <h6>
                    <strong>Munição:∞</strong>
                  </h6>
                </Col>
                <Col></Col>
              </Row>
              O mecha da D.Va é equipado com canhões rotativos de curto alcance.
              Eles projetam disparos contínuos de alto dano, sem a necessidade
              de carregar, mas reduzem a velocidade de movimento da D.Va
              enquanto estão ativos.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-1 ml-1">
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              PROPULSORES -
              <img
                src={props}
                height="35"
                width="35"
                className="d-inline-block pl-2"
                alt="d.va logo"
              />
            </Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  <h6>
                    <strong>Duração:</strong>2seg
                  </h6>
                </Col>
                <Col>
                  <h6>
                    <strong>Cooldown:</strong>5seg
                  </h6>
                </Col>
                <Col></Col>
              </Row>
              O mecha da D.Va se lança no ar e sua força a empurra para frente.
              Ela pode virar e mudar de direção ou atropelar seus inimigos,
              empurrando-os para trás.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-1 ml-1">
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              MATRIZ DE <br /> DEFESA -
              <img
                src={matriz}
                height="37"
                width="45"
                className="d-inline-block pl-2"
                alt="d.va logo"
              />
            </Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  <h6>
                    <strong>Duração:3seg</strong>
                  </h6>
                </Col>
                <Col>
                  <h6>
                    <strong>Cooldown:</strong>10seg
                  </h6>
                </Col>
                <Col></Col>
              </Row>
              D.Va pode ativar seus projetores frontais para atirar em projéteis
              iminentes no ar.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="mb-1 pb-3">
        <Card className="m-1 ml-1">
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              HABILIDADE SUPREMA <br /> AUTODESTRUIR -
              <img
                src={auto}
                height="35"
                width="35"
                className="d-inline-block pl-2"
                alt="d.va logo"
              />
            </Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  <h6>
                    <strong>Alcance:</strong> 20 m de raio
                  </h6>
                </Col>
                <Col></Col>
              </Row>
              D.Va ejeta de seu mecha e arma seu reator para explodir, causando
              dano massivo a seus inimigos próximos.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-1 ml-1">
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              ARMA DE LUZ -
              <img
                src={arma}
                height="37"
                width="50"
                className="d-inline-block pl-2"
                alt="d.va logo"
              />
            </Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  <h6>
                    <strong>Munição:</strong> 14 tiros
                  </h6>
                </Col>
              </Row>
              Enquanto estiver fora de seu mecha, D.Va pode continuar a luta com
              um desintegrador automático de médio alcance.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-1 ml-1">
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              EJETAR -
              <img
                src={ejetar}
                height="40"
                width="60"
                className="d-inline-block pl-2"
                alt="d.va logo"
              />
            </Card.Title>
            <Card.Text>
              D.Va ejeta-se de seu Mecha quando ele é destruído..
            </Card.Text>
            <Card.Title className="card-title">
              CHAMAR MECHA -
              <img
                src={chama}
                height="40"
                width="55"
                className="d-inline-block pl-2"
                alt="d.va logo"
              />
            </Card.Title>
            <Card.Text>
              Se sua armadura de batalha for destruída, D.Va pode chamar um
              mecha novinho em folha para retornar para as trincheiras.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
         </section>
      
  </Container>
  <iframe
        className="video"
        width="320"
        height="315"
        src="https://www.youtube.com/embed/YO5HPWjMSa8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
  </div>
);

export default Hero2;
