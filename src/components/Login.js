import { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase";
import { AuthContext } from "./Auth";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MainBannerWithoutImage from "./MainBannerWithoutImage";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import { useState } from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Login = ({ history }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
  
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
       
        history.push("/");
      } catch (error) {
        //alert(error);
         setOpen(true);
      }
    },
    [history]

    );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <MainBannerWithoutImage title="Login" />
      <Container fluid className="form-margin">
        <Row className="justify-content-center">
          <Col sm={12} md={5}>
            <Form onSubmit={handleLogin} className="mt-2">
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label mt-3">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="form-label mt-3">Password</Form.Label>
              </Form.Group>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <Button className="btn-thumb-form mt-4" type="submit">
                Login
              </Button>
              <div className={classes.root}>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="error">
                    The password is invalid or the user does not have password.
                  </Alert>

                </Snackbar>          
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Login);
