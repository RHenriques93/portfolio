import { useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase";
import { AuthContext } from "./Auth";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import MainBannerWithoutImage from "./MainBannerWithoutImage";

import { useConfirm } from "material-ui-confirm";

const Logout = ({ history }) => {
  const confirm = useConfirm();

  function handleClick() {
   
    //confirm("Are you sure you want to sign out?");
    confirm({ description: `Are you sure you want to sign out` })
      .then(() => {
        firebase.auth().signOut();
        history.push("/");
        return <Redirect to="/" />;
      })

      .catch(() => console.log("Deletion cancelled."));
  }

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return (
      <div>
        <MainBannerWithoutImage title="Logout" />
        <Container fluid className="form-margin-logout">
          <Row className="justify-content-center">
            <Col sm={12} md={6}>
              <Form>
                <Button
                  className="btn-thumb-form mt-4"
                  
                  onClick={handleClick}
                >
                  Sign Out
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <MainBannerWithoutImage title="Logout" />
        <Container fluid className="form-margin-logout">
          <Row className="justify-content-center">
            <Col sm={12} md={6}>
              <h1 className="text-center mt-5 logout_text">
                You are not logged. Click to redirect to login page.
              </h1>
              <Link to="/login">
                <Button className="btn-thumb-form mt-4 text-center">
                  Login
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default withRouter(Logout);
