import { Container, Row, Col } from "react-bootstrap";
import MainBanner from "../components/MainBanner";
import Personality from "../images/personality.svg";

import FotoResume from "../images/foto_rafael_henriques.jpg";

import CV_Resume from "../docs/CV_RafaelHenriques_EN_2021.pdf";

import Slide from "react-reveal/Slide";



function Resume() {
  return (
    <div>
      <MainBanner title="Resume" />

      <Container fluid className="resume_head p-5">
        
        <Row className="justify-content-md-center">
          <Col sm={12} md={4} className="text-center mb-4">
            
            <Slide left>
              <img
                className="profile_pic"
                src={FotoResume}
                alt="Foto Rafael Henrique"
              ></img>
            </Slide>

            <br></br>
            <br></br>
            <a href={CV_Resume} className="btn-download" download>
              <i className="fas fa-arrow-down mr-3"></i> Download Resume
            </a>

           </Col>

          <Col sm={12} md={6}>
            
            <Slide right>
              <h1 className="resume_name">Rafael Henriques</h1>
            </Slide>
          
            <hr className="custom_hr_red"></hr>

            <Slide right>
              <p className="resume_bio">
                Rafael Henriques was born in Coimbra in 1993 and he is a
                multimedia technician whose work areas focus on video editing,
                photography, graphic design, 3D modeling and animation, motion
                graphics, music production, sound design, front-end development
                and UI / UX Design. Since 2018 he has been studying Multimedia
                at Instituto Superior Miguel Torga in Coimbra. From 2016 to 2018
                he was employed at Pedrógão Grande City Hall where he worked as
                a designer, videographer, photographer and also as a digital
                cinema projectionist.
              </p>
            </Slide>
            
            <hr className="custom_hr_red"></hr>
            <Slide right>
              <h2 className="resume_birthandlocation">
                1993 | Coimbra | Portugal
              </h2>
            </Slide>
            
            <hr className="custom_hr_red"></hr>

    

          </Col>
        </Row>
      </Container>

      <Container fluid className="resume_education px-5">
        <Row className="justify-content-md-center">
          <Col sm={12} md={12}>
            <Slide left>
              <h1 className="education_title">Education</h1>
            </Slide>

            <hr className="custom_hr_black mb-5"></hr>

            <Slide left>
              <h2 className="resume_education_main ">
                <i className="fas fa-chevron-right icon-margin black"></i>
                BACHELOR´S DEGREE IN MULTIMEDIA
              </h2>

              <h3 className="resume_education_second">
                INSTITUTO SUPERIOR MIGUEL TORGA | COIMBRA | 2018 - 2021
              </h3>
            </Slide>


            <hr className="custom_hr_black mt-5 mb-5"></hr>

            <Slide left>
              <h2 className="resume_education_main">
                <i className="fas fa-chevron-right icon-margin black"></i>
                PROFESSIONAL COURSE - HIGH SCHOOL
              </h2>
              <h3 className="resume_education_second">
                TECHNICIAN OF COMUNICATION, MKT, PUBLIC RELATIONS AND
                ADVERTISING
              </h3>
              <h4 className="resume_education_third">
                INSTITUTO TÉCNICO ARTÍSTICO E PROFISSIONAL DE COIMBRA | 2012 -
                2015
              </h4>
            </Slide>
          </Col>
        </Row>
      </Container>

      <Container fluid className="resume_experience px-5">
        <Row className="justify-content-md-center">
          <Col sm={12} md={12}>
            <Slide left>
              <h1 className="experience_title">Experience</h1>
            </Slide>
            <hr className="custom_hr_red mb-5"></hr>

            <Slide left>
              <h2 className="resume_experience_main">
                <i className="fas fa-chevron-right icon-margin red"></i>CASA
                MUNICIPAL DA CULTURA - PEDRÓGÃO GRANDE CITY HALL
              </h2>
              <h3 className="resume_experience_second">
                JUNE 2016 - OCTOBER 2018 ( PROFESSIONAL INTERNSHIP (9 MONTHS +
                FULL TIME)
              </h3>
              <h3 className="resume_experience_second">
                GRAPHIC DESIGNER / VIDEO EDITOR / PHOTOGRAPHER
              </h3>
            </Slide>
            <hr className="custom_hr_red mt-5 mb-5"></hr>

            <Slide left>
              <h2 className="resume_experience_main">
                <i className="fas fa-chevron-right icon-margin red"></i>MX
                AGENCY / RIJO MADEIRA PRODUÇÕES - COIMBRA
              </h2>
              <h3 className="resume_experience_second">
                JUNE 2015 - JULY 2015 (CURRICULAR INTERNSHIP)
              </h3>
              <h4 className="resume_experience_third">
                VIDEO EDITOR / CAMERA OPERATOR / GRAPHIC DESIGNER
              </h4>
            </Slide>

            <hr className="custom_hr_red mt-5 mb-5"></hr>

            <Slide left>
              <h2 className="resume_experience_main">
                <i className="fas fa-chevron-right icon-margin red"></i>UCV -
                TELEVISÃO WEB DA UNIVERSIDADE DE COIMBRA
              </h2>
              <h3 className="resume_experience_second">
                JUNE 2014 - JULY 2014 (CURRICULAR INTERNSHIP)
              </h3>
              <h4 className="resume_experience_third">
                IMAGE REPORTER / VIDEO EDITOR
              </h4>
            </Slide>
          </Col>
        </Row>
      </Container>

      {/* 
      <Container fluid className="resume_experience">
        <Row className="justify-content-md-center">
          <Col sm={12} md={12}>
            <h1 className="education_title">Personality</h1>
            <object
              className="personalidade"
              type="image/svg+xml"
              data={Personality}
            ></object>
          </Col>
        </Row>
      </Container>

      */}

      <Container fluid className="resume_skills px-5">
        <Row className="justify-content-md-center">
          <Col sm={12} md={4}>
            <Slide left>
              <h1 className="skills_title">Soft Skills</h1>
            </Slide>
            <hr className="custom_hr_red"></hr>

            <Slide left>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>Time
                Management
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>
                Versatility
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>
                Responsability
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>
                Criativity
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>
                Organization
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>
                Dedication
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>
                Adaptation
              </h3>
            </Slide>
          </Col>

          <Col sm={12} md={4}>
            <Slide left>
              <h1 className="skills_title">Hard Skills</h1>
            </Slide>

            <hr className="custom_hr_red"></hr>

            <Slide left>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>
                Video and Photography | Capture and Editing
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>Graphic
                Design / UI / UX Design
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>Motion
                Graphics
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>3D
                Modelling and Animation
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>
                Front-end Web Development
              </h3>
              <h3 className="item-list-skills">
                <i className="fas fa-chevron-right icon-margin red"></i>Sound
                Design and Music Production
              </h3>
            </Slide>
          </Col>
        </Row>
      </Container>

      <Container fluid className="resume_tools px-5">
        <Row className="justify-content-md-center">
          <Col sm={12} md={12}>
            <Slide left>
              <h1 className="tools_title">Tools / Technologies</h1>
            </Slide>
            <hr className="custom_hr_black"></hr>

            <Slide left>
              <h3 className="item-list-tools">
                <i className="fas fa-chevron-right icon-margin black"></i>Adobe
                (Illustrator, Photoshop, Premiere, After Effects, InDesign,
                Animate, Audition, Lightroom)
              </h3>
              <h3 className="item-list-tools">
                <i className="fas fa-chevron-right icon-margin black"></i>
                Blender
              </h3>
              <h3 className="item-list-tools">
                <i className="fas fa-chevron-right icon-margin black"></i>Cinema
                4D
              </h3>
              <h3 className="item-list-tools">
                <i className="fas fa-chevron-right icon-margin black"></i>Unity
              </h3>
              <h3 className="item-list-tools">
                <i className="fas fa-chevron-right icon-margin black"></i>
                Android Studio
              </h3>
              <h3 className="item-list-tools">
                <i className="fas fa-chevron-right icon-margin black"></i>
                Ableton Live
              </h3>
              <h3 className="item-list-tools">
                <i className="fas fa-chevron-right icon-margin black"></i>HTML5,
                CSS, Javascript, Bootstrap, Wordpress{" "}
              </h3>
              <h3 className="item-list-tools">
                <i className="fas fa-chevron-right icon-margin black"></i>Basic
                Knowledge of (React.js, node.js, PHP, Java, C#)
              </h3>
            </Slide>
          </Col>
        </Row>
      </Container>

      <Container fluid className="resume_languages px-5">
        <Row className="justify-content-md-center">
          <Col sm={12} md={8}>
            <Slide left>
              <h1 className="languages_title">Languages</h1>
            </Slide>
            <hr className="custom_hr_red"></hr>
            <Slide left>
              <h3 className="item-list-languages">
                <i className="fas fa-chevron-right icon-margin red"></i>
                Portuguese (Native Language)
              </h3>
            </Slide>
            <hr className="custom_hr_red"></hr>
            <Slide left>
              <h3 className="item-list-languages mb-3">
                <i className="fas fa-chevron-right icon-margin red"></i>English
              </h3>
            </Slide>

            <div className="english_skills">
              <Slide left>
                <div className="skills understanding">Understanding | 80%</div>
              </Slide>
            </div>

            <div className="english_skills">
              <Slide left>
                <div className="skills written">Speech | 60%</div>
              </Slide>
            </div>

            <div className="english_skills">
              <Slide left>
                <div className="skills speech">Written | 70%</div>
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
