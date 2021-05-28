import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import foto1 from "../assets/homepics/1.jpg";
import foto2 from "../assets/homepics/2.jpg";
import foto3 from "../assets/homepics/33.jpg";
import foto4 from "../assets/homepics/4.jpg";
import foto5 from "../assets/homepics/5.jpeg";
import foto6 from "../assets/homepics/5.jpg";
import foto7 from "../assets/homepics/7.jpg";

import "./Home.scss";

const Home = () => (
  <div className="mt-5 pt-5 pb-5">
    <Container expand="lg" className="lg-p-2">
      <h2 className="home-title">D.VA</h2>

      <Col>
        <Image className="img-responsive py-2"src={foto1} alt="D.Va" class="rounded" />
      </Col>
      <Col>
        <Image className="img-responsive py-2"src={foto2} alt="D.Va" class="rounded" />
      </Col>
      <Col>
        <Image className="img-responsive py-2"src={foto3} alt="D.Va" class="rounded" />
      </Col>
      <Col>
        <Image className="img-responsive py-2"src={foto4} alt="D.Va" class="rounded" />
      </Col>
      <Col>
        <Image className="img-responsive py-2"src={foto5} alt="Overwatch" class="rounded"/>
      </Col>
      <Col>
        <Image className="img-responsive py-2"src={foto6} alt="D.Va" class="rounded" />
      </Col>
      <Col>
        <Image className="img-responsive py-2"src={foto7} alt="D.Va" class="rounded" />
      </Col>
    </Container>
  </div>
);

export default Home;
