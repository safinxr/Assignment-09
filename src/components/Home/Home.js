import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import pcImg from "../../Assets/pcImg.png";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h1 className="m-0 display-4 fw-bold ">Your Next Gaming PC</h1>
            <h1 className="m-0 display-4 fw-bold text-primary">
              RTX 3090 DDr6 12gb
            </h1>
            <p className="justify my-4 me-5">A powerful gaming PC is a huge investment but it pays off in a variety of ways. In addition to experiencing games at blazing fast frame rates and ultra-high resolution, you can also use your premium-priced PC for graphic design, animation, streaming movies in glorious 4K on your TV or simply to get work done. <br/> With next-gen consoles in the market we should point out that while the PS5 and Xbox Series X deliver plenty of power, they're still no match for one of the best gaming desktops. If you want fast-loading SSDs, gorgeous ray tracing, massive quantities of RAM, 4K resolution and 60+ fps frame rate, you don't have to wait for these consoles to be back in stock; you can have the best gaming desktops right now.</p>
            <a className="btn btn-primary px-5 py-3" target='_blank' href="https://www.pcmag.com/picks/the-best-gaming-desktops"> More info</a>
          </Col>
          <Col xs={12} md={4}>
            <img className="w-100" src={pcImg} alt="" />
          </Col>
        </Row>
        <div className="my-5 text-center">
          <h1>Coustomer Revieus ( )</h1>
          
        </div>
      </Container>

    </div>
  );
};

export default Home;
