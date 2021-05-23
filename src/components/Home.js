import React from "react";
import { Container, Col, Row } from "react-bootstrap";
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
      <div>
        <img
          src={foto1}
          height xs={2}
          width  xs={2}
          className="home-img d-inline-block w-100 pb-2 "
          alt="d.va logo"
        />
      </div>
      <div>
        <img
          src={foto2}
          height xs={2} 
          width="200"
          className=" home-img d-inline-block w-100 pb-2 "
          alt="d.va logo"
        />
         <img
          src={foto4}
          height="360"
          width="560"
          className="home-img d-inline-block w-100 pb-2 "
          alt="d.va logo"
        />
        </div>
        <div className="d-ml-1 d-mr-1 lg-ml-5">
        <img
          src={foto6}
          height="300"
          width="350"
          className="home-img d-inline-block  pb-3 ml-1 pr-2"
          alt="d.va logo"
        />
        <img
          src={foto3}
          height xs={7} 
          width='320'
          className="home-img d-inline-block w-30 pb-3 ml-3"
          alt="d.va logo"
        />
      </div>
      <div>
        <img
         src={foto7}
         height xs={2} 
         width="200"
         className=" home-img d-inline-block w-100 pb-2 "
         alt="d.va logo"
        />
      </div>
    </Container>
  </div>
);

export default Home;
