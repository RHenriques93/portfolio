import { Form, Button, Row, Col } from "react-bootstrap";
import firebase from "../firebase";
import { useState, useEffect } from "react";

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const db = firebase.firestore();

function NewProject() {

  const classes = useStyles();

  const [fileUrl, setFileUrl] = useState([]);
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setLoading(true);
    Array.from(e.target.files).map(async (file) => {
      const storageRef = await firebase.storage().ref();
      const fileRef = await storageRef.child(file.name);
      await fileRef.put(file).then(() => {
        setFileUrl((prevState) => [...prevState, fileRef.getDownloadURL()]);
      });
      setLoading(false);
    });

    console.log(fileUrl);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(fileUrl);

    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const embed = e.target.embed.value;
    const embed2 = e.target.embed2.value;
    const embed3 = e.target.embed3.value;

    Promise.all(fileUrl).then((values) => {
      console.log(values);
      setImages((prevState) => [...prevState, values]);
      console.log(images);
    });

    const imagens = await Promise.all(fileUrl);

    console.log(imagens);

    db.collection("projects").add({
      title: title,
      description: description,
      category: category,
      title: title,
      images: imagens,
      embed: embed,
      embed2: embed2,
      embed3: embed3,
      //images: firebase.firestore.FieldValue.arrayUnion(...['javascript', 'typescript']),
    });

    document.getElementById("submit-form").reset();
    setFileUrl([]);
  };

  return (
    <Row className="justify-content-center">
      <Col sm={12} md={10}>
        <h1 className="text-center  mt-5 page-titles">Add New Project</h1>

        <hr className="custom_hr_red mt-4 mb-4"></hr>

        <Form id="submit-form" onSubmit={onSubmit} className="mt-5">
          <Form.Group controlId="formBasicTitle">
            <Form.Label className="form-label mt-3">Project Title</Form.Label>
            <Form.Control
              className="input-form"
              type="text"
              name="title"
              placeholder="Insert name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicCategory">
            <Form.Label className="form-label mt-3">Category</Form.Label>
            <Form.Control
              className="input-form"
              type="text"
              name="category"
              placeholder="Insert category"
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label className="form-label mt-3">Description</Form.Label>
            <Form.Control
              className="input-form"
              type="text"
              name="description"
              placeholder="Insert Description"
            />
          </Form.Group>


          <Form.Group controlId="formBasicEmbed">
            <Form.Label className="form-label mt-3">Embed Widget</Form.Label>
            <Form.Control
              className="input-form"
              type="text"
              name="embed"
              placeholder="Insert Iframe with class 'responsive-iframe'"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmbed2">
            <Form.Label className="form-label mt-3">Embed Widget 2</Form.Label>
            <Form.Control
              className="input-form"
              type="text"
              name="embed2"
              placeholder="Insert Iframe with class 'responsive-iframe'"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmbed3">
            <Form.Label className="form-label mt-3">Embed Widget 3</Form.Label>
            <Form.Control
              className="input-form"
              type="text"
              name="embed3"
              placeholder="Insert Iframe with class 'responsive-iframe'"
            />
          </Form.Group>

          <Form.Group controlId="formBasicImages">
            <Form.Label className="form-label mt-3">Select Images</Form.Label>
            <Form.Control
              className="input-form"
              type="file"
              name="images"
              onChange={onChange}
              placeholder="Insert Image Url"
              multiple
            />
          </Form.Group>

          {loading ? (
            <Backdrop className={classes.backdrop} open>
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            <Button
            className="btn-thumb-add mt-4"
            variant="primary"
            type="submit"
          >
            Add Project
          </Button>
          )}

      
        </Form>
      </Col>
    </Row>
  );
}

export default NewProject;
