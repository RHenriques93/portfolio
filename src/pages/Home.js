import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Video from '../videos/square_anim.mp4'
import { Link } from 'react-router-dom';
import Slide from "react-reveal/Slide";

function Home(props) {
  return (
<div>


<video autoPlay muted loop id="myVideo">
    <source
      src={Video}
      type="video/mp4"
    />
  </video> 

<Container fluid className="home-page">

     <Row className="justify-content-center">
   
        <Col sm={12} md={12}>


            <h1 className="text-center home-page-title mt-5 mb-5 px-2">
            RAFAEL HENRIQUES
          </h1>

            <hr className="custom_hr_red"></hr>

          <Slide bottom>
          <p className="text-center home-page-description ">
            Welcome, check my resume and portfolio or send me a message.
          </p>
 </Slide>


    <div className="center-div-buttons">
            <Link to="/resume" className="home-button">
                            RESUME
            </Link>

            <a className="home-button" href="https://www.behance.net/rafael_henriques" target="_blank" rel="noopener noreferrer">
                PORTFOLIO
                </a>
          
  </div>

        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;
