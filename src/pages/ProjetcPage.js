import { withRouter } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import EditProject from "../components/EditProject";
import DeleteProject from "../components/DeleteProject";
import { Form, Button } from "react-bootstrap";

import firebase from "../firebase";
import "firebase/firestore";
import MainBanner from "../components/MainBanner";

import { useConfirm } from "material-ui-confirm";

import ReactHtmlParser from "react-html-parser";

function ProjectPage(props) {
  const confirm = useConfirm();

  const [email, setEmail] = useState(null);
  const [projects, setProjects] = useState([]);
  const [id_reference, setId_reference] = useState(null);
  const [images, setImages] = useState([]);

  const clickedId = props.match.params.project_id;

  useEffect(() => {
    const user = firebase.auth().currentUser;
    var email_user = "";

    if (user != null) {
      email_user = user.email;
    }

    setEmail(email_user);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      await db
        .collection("projects")
        .doc(clickedId)
        .get()
        .then((snapshot) => setProjects(snapshot.data()));
      const docRefId = await db.collection("projects").doc(clickedId).id;
      setId_reference(docRefId);
      // console.log(id_reference);
      setImages(projects.images);
    };

    fetchData();
  }, [images]);

  const deleteFromFirebase = (e) => {
    e.preventDefault();

    confirm({ description: `Are you sure you want to delete this image?` })
      .then(() => {
        const url = e.target.imgurl.value;
        console.log(url);

        let pictureRef = firebase.storage().refFromURL(url);

        pictureRef
          .delete()

          .catch((err) => {
            console.log(err);
          });

        const db = firebase.firestore();
        db.collection("projects")
          .doc(clickedId)
          .update({
            images: firebase.firestore.FieldValue.arrayRemove(url),
          });

        alert("Picture is deleted successfully!");
      })
      .catch(() => console.log("Deletion cancelled."));
  };

  const project = (
    <div className="mb-5">
      <h1 className="text-center page-titles">{projects.title}</h1>

      <hr className="custom_hr_red mt-4 mb-4"></hr>

      <div className="text-center mb-3">
        <Link to="/projects" className="goback">
        <i className="fas fa-chevron-left"></i> Go Back to Projects
        </Link>
      </div>

      <Carousel className="carrousel-style">
        {projects.images !== undefined &&
          projects.images.map((option) => (
            <Carousel.Item key={option}>
              <img className="d-block w-100" src={option} alt={option} />
              {email === process.env.REACT_APP_EMAIL && (
                <div>
                  <Form id="submit-form-2" onSubmit={deleteFromFirebase}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="imgurl"
                        value={option}
                        hidden
                        readOnly
                      ></Form.Control>
                    </Form.Group>
                    <Button
                      className="btn-thumb-delete mt-4"
                      variant="primary"
                      type="submit"
                    >
                      <i className="fas fa-trash"></i> Delete Image
                    </Button>
                  </Form>
                </div>
              )}
            </Carousel.Item>
          ))}
      </Carousel>

      {/* <img src={filteredProject.imgurl} alt={filteredProject.title} /> */}
      <p className="category">Category: {projects.category}</p>
      <p className="description-header">About</p>
      <p className="description">{projects.description}</p>


      {projects.embed && <div className="embed">{ReactHtmlParser(projects.embed)}</div> }

{projects.embed2 && <div className="embed">{ReactHtmlParser(projects.embed2)}</div> }

{projects.embed3 && <div className="embed">{ReactHtmlParser(projects.embed3)}</div> }

<div className="text-center mt-5 mb-5">
        <Link to="/projects" className="goback">
        <i className="fas fa-chevron-left"></i> Go Back to Projects
        </Link>
      </div>

    </div>
  );

  const project_edit_delete = (
    <div>
      <EditProject
        key={projects}
        title={projects.title}
        description={projects.description}
        category={projects.category}
        images={projects.images}
        id={id_reference}
        embed={projects.embed}
        embed2={projects.embed2}
        embed3={projects.embed3}
      />

      <DeleteProject
        key={id_reference}
        id={id_reference}
        images={projects.images}
      />
    </div>
  );

  return (
    <div>
      <Container fluid mb-5>
        <Row className="justify-content-center">
          <Col sm={12} md={8}>
            {project}

            <Col sm={12} md={12}>
              
            
{ /*            
              <div
                className="embed"
                dangerouslySetInnerHTML={{ __html: projects.embed }}
              />


 <div className="embed">{ReactHtmlParser(projects.embed)}</div>



       <div className="embed">{ReactHtmlParser(projects.embed)}</div>

       
              <div className="embed">
              <iframe
                  className="responsive-iframe"
                  src={projects.embed}
                  frameborder="0"
                  allowfullscreen
                ></iframe>

                  </div>
            



              */
 }
       



       
       

            
            
            </Col>

            {email === process.env.REACT_APP_EMAIL && project_edit_delete}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(ProjectPage);
