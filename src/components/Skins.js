import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Skins.scss";
import skin1 from "../assets/skins/skin1.jpg";
import skin2 from "../assets/skins/skin2.png";
import skin4 from "../assets/skins/skin4.jpg";
import skin5 from "../assets/skins/skin5.jpg";
import skin7 from "../assets/skins/skin7.jpg";
import skin8 from "../assets/skins/skin8.jpg";
import pin from "../assets/pixel5.png";

const Skins = () => {
  return (
    <div className="mt-5 pt-5 pb-5">
      <Container expand="lg" className="skin-container">
        <section className="container-skin   text-light lg-p-2">
          <h2 className="title m-t4 pt-2">
            Skins
            <img src={pin} height="120" width="120" alt="d.va logo" />
          </h2>
          <Carousel className="d-inline-block">
            <Carousel.Item>
              <img
                className=" img-dva d-block w-100"
                src={skin1}
                height
                xs={7}
                width
                xs={7}
                alt="d.va logo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" img-dva d-block w-100"
                src={skin2}
                height
                xs={7}
                width
                xs={7}
                alt="d.va logo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" img-dva d-block w-100"
                src={skin8}
                height
                xs={7}
                width
                xs={7}
                alt="d.va logo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" img-dva d-block w-100"
                src={skin4}
                height
                xs={7}
                width
                xs={7}
                alt="d.va logo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" img-dva d-block w-100"
                src={skin5}
                height
                xs={7}
                width
                xs={7}
                alt="d.va logo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" img-dva d-block w-100"
                src={skin7}
                height
                xs={7}
                width
                xs={6}
                alt="d.va logo"
              />
            </Carousel.Item>
          </Carousel>
        </section>
        
      </Container>
      <iframe className='video' width="320" height="315" src="https://www.youtube.com/embed/zlEWKEQsgeQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  );
};

export default Skins;
