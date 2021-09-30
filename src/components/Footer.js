import {Container, Row, Col} from 'react-bootstrap';



function Footer() {
  return (



    <div className="fixed-footer ftr">
      <Container fluid >
        <Row className="justify-content-center text-center">
          <Col sm={12} md={12} xs={10}>
   
 
 
          <a href="https://www.behance.net/rafael_henriques" target="_blank">
        <i className="fab fa-behance fa-1x socialsize"></i>
      </a>
 
      <a href="https://www.linkedin.com/in/rafael-henriques-multimedia/" target="_blank">
        <i className="fab fa-linkedin fa-1x socialsize"></i>
      </a>

      <a href="https://github.com/RHenriques93" target="_blank">
        <i className="fab fa-github fa-1x socialsize"></i>
      </a>

      <a href="https://codesandbox.io/u/rafaelhenriques1993" target="_blank">
        <i className="fas fa-code fa-1x socialsize"></i>
      </a>

      
      <a
        href="https://www.youtube.com/channel/UCwEfYZS-K6ZKvIpzjUd3VrA"
        target="_blank"
      >
        <i className="fab fa-youtube fa-1x socialsize"></i>
      </a>
   

      <a
        href="https://vimeo.com/rafaelhenriques"
        target="_blank"
      >
        <i className="fab fa-vimeo fa-1x socialsize"></i>
      </a>

      <a href="https://www.facebook.com/rafael.henriques.779" target="_blank">
        <i className="fab fa-facebook fa-1x socialsize"></i>
      </a>
      <a href="https://www.instagram.com/rafael.henriqu3s/" target="_blank">
        <i className="fab fa-instagram fa-1x  socialsize"></i>
      </a>
   
   
      <a href="https://soundcloud.com/rafael-henriques" target="_blank">
        <i className="fab fa-soundcloud fa-1x socialsize"></i>
      </a>
 


      </Col>
      </Row>
       </Container>
    </div>



  );
}

export default Footer;
