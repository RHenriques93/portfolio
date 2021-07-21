import { Form, Button, Row, Col, Container } from "react-bootstrap";
import firebase from "../firebase";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


function EditProject(props) {

  const classes = useStyles();

  let history = useHistory();
  

  const [fileUrl, setFileUrl] = useState([props.images]);
  const [imageUrls, setImageUrls] = useState([]);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [category, setCategory] = useState(props.category);
  const [embed, setEmbed] = useState(props.embed);
  const [embed2, setEmbed2] = useState(props.embed2);
  const [embed3, setEmbed3] = useState(props.embed3);

  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setLoading(true);
    Array.from(e.target.files).map(async (file) => {
      const storageRef = await firebase.storage().ref();
      const fileRef = await storageRef.child(file.name);
      await fileRef.put(file).then(() => {
        setImageUrls((prevState) => [...prevState, fileRef.getDownloadURL()]);
      });
      setLoading(false);
    });

    console.log(imageUrls);
  };



  const onUpdate = async (e) => {
    console.log(imageUrls);
    try {

    const db = firebase.firestore();

    e.preventDefault();
    const id = e.target.id.value;

    const imagens = await Promise.all(imageUrls);

    console.log(imagens);

  

    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const embed = e.target.embed.value;
    const embed2 = e.target.embed2.value;
    const embed3 = e.target.embed3.value;

    db.collection("projects")
      .doc(id)
      .update({
        ...props,
        title: title,
        description: description,
        category: category,
        embed: embed,
        embed2: embed2,
        embed3: embed3,
        images: firebase.firestore.FieldValue.arrayUnion(...imagens)
      });

      alert("Info Updated");
      history.push("/projects");

    } 
   

    catch {
      alert("Error on Update Info");
      history.push("/projects");
    }
  };

  return (
    <Container fluid>
    <Row className="justify-content-center">
      <Col sm={12} md={10}>
        <h1 className="text-center  mt-5 page-titles">Edit Project</h1>

        <Form onSubmit={onUpdate} className="mt-5">
          <Form.Group controlId="formBasicTitle">
            <Form.Control
              defaultValue={props.id}
              className="input-form"
              type="hidden"
              name="id"
              placeholder="Project Id"
              disabled
            />
          </Form.Group>

          <Form.Group controlId="formBasicTitle">
            <Form.Label className="form-label mt-3">Project Title</Form.Label>
            <Form.Control
              defaultValue={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="input-form"
              type="text"
              name="title"
              placeholder="Project Title"
            />
          </Form.Group>

          <Form.Group controlId="formBasicCategory">
            <Form.Label className="form-label mt-3">Category</Form.Label>
            <Form.Control
              defaultValue={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="input-form"
              type="text"
              name="category"
              placeholder="Category Number 1"
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label className="form-label mt-3">Description</Form.Label>
            <Form.Control
              defaultValue={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="input-form"
              type="text"
              name="description"
              placeholder="Description"
            />
          </Form.Group>


          <Form.Group controlId="formBasicEmbed">
            <Form.Label className="form-label mt-3">Embed Widget</Form.Label>
            <Form.Control
              defaultValue={embed}
              onChange={(e) => {
                setEmbed(e.target.value);
              }}
              className="input-form"
              type="text"
              name="embed"
              placeholder="Embed Widget 1"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmbed">
            <Form.Label className="form-label mt-3">Embed Widget 2</Form.Label>
            <Form.Control
              defaultValue={embed2}
              onChange={(e) => {
                setEmbed2(e.target.value);
              }}
              className="input-form"
              type="text"
              name="embed2"
              placeholder="Embed Widget 2"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmbed">
            <Form.Label className="form-label mt-3">Embed Widget 3</Form.Label>
            <Form.Control
              defaultValue={embed3}
              onChange={(e) => {
                setEmbed3(e.target.value);
              }}
              className="input-form"
              type="text"
              name="embed3"
              placeholder="Embed Widget 3"
            />
          </Form.Group>


          <Form.Group controlId="formBasicImages">
            <Form.Label className="form-label mt-3">Add Images</Form.Label>
            <Form.Control
              onChange={onChange}
              className="input-form"
              type="file"
              name="images"
              placeholder="Insert Image Url"
              multiple
            />
          </Form.Group>

   

          {loading ? (
            <Backdrop className={classes.backdrop} open>
              
              <div><h1 className="mr-3">Uploading Images</h1></div>
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            <Button
            className="btn-thumb-form mt-4 m"
            variant="primary"
            type="submit"
          >
            <i className="fas fa-edit"></i> Update Project
          </Button>
          )}


          
        </Form>
      </Col>
    </Row>
    </Container>
  );
}

export default EditProject;
