import {Container, Row, Col} from 'react-bootstrap';

import Video from '../videos/square_anim.mp4'

import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';

function MainBanner(props) {
    return(


<Container fluid className="mainbanner">



        <Row className="justify-content-md-center">
          <Col sm={12} md={12} className="text-center">

          <video autoPlay muted loop id="myVideoBanner">
    <source
      src={Video}
      type="video/mp4"
    />
  </video> 

          <Slide top>
            <h1 className="title">{props.title}</h1>
            
            </Slide>
          </Col>
        </Row>
      </Container>
    )
}

export default MainBanner;
