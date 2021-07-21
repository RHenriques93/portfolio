import Thumbnail from "../components/Thumbnail";
import MainBanner from "../components/MainBanner";
import NewProject from "../components/NewProject";

import { Container, Row, Col } from "react-bootstrap";

import { useState, useEffect, useContext } from "react";
import firebase from "../firebase";
import "firebase/firestore";

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


//import { AuthContext } from "../components/Auth";


function Projects() {

const classes = useStyles();

  const user = firebase.auth().currentUser;
  var email = "";

  if (user != null) {
    email = user.email;
    console.log(email);
  }

  //const user = { name: 'chris', role: 'admin' };

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const db = firebase.firestore();
      db.collection("projects").onSnapshot((snapshot) => {
        const projectsData = [];
        snapshot.forEach((doc) =>
          projectsData.push({ ...doc.data(), id: doc.id })
        );
        setProjects(projectsData);
        setLoading(false);
      });
    };

    fetchData();

    //const data = await db.collection("projects").get()
    //setProjects(data.docs.map(doc => doc.data()))
  }, []);

  const listProjects = projects.map((project) => (
    <Col sm={10} md={3} className="px-0" key={project.id}>
      <Thumbnail
        title={project.title}
        imgurl={project.images}
        category={project.category}
        link={"/project/" + project.id}
      ></Thumbnail>
    </Col>
  ));

  return (
    <div className="  ">
      <MainBanner title="Portfolio" />
      <Container fluid className="projects-container pb-5">
        <Row className="justify-content-center">
          <h1 className="text-center  mt-5 page-titles-projects">Projects</h1>
          <hr className="custom_hr_red mt-4 mb-4"></hr>
          <h2 className="text-center mb-5  page-subtitles">
            Find my latest projects
          </h2>

          {loading ? (
            <Backdrop className={classes.backdrop} open>
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            listProjects
          )}
        </Row>

        {email === process.env.REACT_APP_EMAIL && <NewProject />}
      </Container>
    </div>
  );
}

export default Projects;
