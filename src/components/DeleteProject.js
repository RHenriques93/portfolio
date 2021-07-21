import { Container, Row, Col, Form, Button } from "react-bootstrap";
import firebase from "../firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useConfirm } from "material-ui-confirm";

function DeleteProject(props) {
 const confirm = useConfirm();

  let history = useHistory();

  const [fileUrl, setFileUrl] = useState([props.images]);

  function DeleteImages() {
    const files_array = fileUrl;
    console.log(files_array);
    console.log(files_array.length);

    files_array.forEach((files, i) => {
      console.log(i);
      console.log(files);

      files.forEach((file, e) => {
        console.log(e);
        console.log(file);

        const imagename = file.toString().split("/").pop();
        const filename = imagename.substring(0, imagename.indexOf("?"));
        console.log(filename);

        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(filename);

        fileRef
          .delete()
          .then(() => {
            console.log("File Deleted with Success.");
          })
          .catch(() => {
            console.log("Error on Deleted File.");
          });
      });
    });

    console.log(files_array.length);
  }

  const onDelete = (e) => {
    e.preventDefault();
       
    try {

      confirm({ description: `Are you sure you want to delete this project.` })
      .then(() => {
        DeleteImages();

        const db = firebase.firestore();
        const id = e.target.title.value;
        console.log(id);
        db.collection("projects").doc(id).delete();
        console.log("Project Deleted");
  
        //alert("Project Deleted");
        history.push("/projects");
  
      })

      .catch(() => console.log("Deletion cancelled."));
  

    } catch (err) {
      alert(err);
      history.push("/projects");
    }
  };

  return (
    <Container fluid className="mb-5">
  <Row className="justify-content-center">
        <Col sm={12} md={10}>
        
        <Form onSubmit={onDelete} className="mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="form-label mt-3"></Form.Label>
            <Form.Control
              defaultValue={props.id}
              className="input-form"
              type="hidden"
              disabled
              name="title"
            />
          </Form.Group>

          <Button
            className="btn-thumb-delete mt-4"
            variant="danger"
            type="submit"
          >
            <i className="fas fa-trash"></i> Delete Project
          </Button>
        </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DeleteProject;
