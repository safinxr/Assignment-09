import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import pcImg from "../../Assets/pcImg.png";
import useReviews from "../../coustomHooks/useRevieus";
import ReviewsCart from "../ReviewsCart/ReviewsCart";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const limitedReview = reviews.slice(0, 3);
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h1 className="m-0 display-4 fw-bold ">Your Next Gaming PC</h1>
            <h1 className="m-0 display-4 fw-bold text-primary">
              RTX 3090 DDr6 12gb
            </h1>
            <p className="justify my-4 me-5">
              A powerful gaming PC is a huge investment but it pays off in a
              variety of ways. In addition to experiencing games at blazing fast
              frame rates and ultra-high resolution, you can also use your
              premium-priced PC for graphic design, animation, streaming movies
              in glorious 4K on your TV or simply to get work done. <br /> With
              next-gen consoles in the market we should point out that while the
              PS5 and Xbox Series X deliver plenty of power, they're still no
              match for one of the best gaming desktops. If you want
              fast-loading SSDs.
            </p>
            <a
              target="_blank"
              className="btn btn-primary px-5 py-3"
              href="https://www.pcmag.com/picks/the-best-gaming-desktops"
              rel="noreferrer"
            >
              {" "}
              More info
            </a>
          </Col>
          <Col xs={12} md={4}>
            <img className="w-100" src={pcImg} alt="" />
          </Col>
        </Row>
        <div className="my-5 mx-auto shadow-lg p-4 rounded w-100">
          <h1 className="text-center">
            Customers Reviews ( {reviews.length} )
          </h1>
          {limitedReview.map((data) => (
            <ReviewsCart key={data.id} data={data}></ReviewsCart>
          ))}
          <Link className="btn btn-primary px-5 py-2" to='/reviews'>More Reviews</Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
