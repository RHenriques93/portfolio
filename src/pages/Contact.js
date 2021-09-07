import { Container, Row, Col } from "react-bootstrap";
import MainBanner from "../components/MainBanner";

import Slide from "react-reveal/Slide";

import emailjs from "emailjs-com";
import { useConfirm } from "material-ui-confirm";

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

function Contact() {
  const confirm = useConfirm();

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    confirm({ description: `Are you sure you want to send the message?` }).then(
      () => {
        emailjs
          .sendForm(
            "service_npxvggs",
            "template_pi26pyn",
            e.target,
            "user_IhFMEGrsaef0KND7Nppqz"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        setOpen(true);
        e.target.reset();
      }
    );
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      {" "}
      <MainBanner title="Contact" />
      <Container fluid className="contact-form-container p-5">

        <Row className="justify-content-md-center mt-5">
          <Col sm={12} md={3} className="contact-info text-center px-5 mb-5">

          
            <Slide top>
              <h1 className="contact-info-title mb-5">Contact Information</h1>
            </Slide>
            <hr className="custom_hr_red mt-4 mb-4"></hr>

            <Slide left>
              <a href="tel:+351918657084" className="contact-info-detail">
                <i className="fas fa-phone icon-margin-contact"></i>+ 351 918657084
              </a>

            </Slide>
            <hr className="custom_hr_red mt-4 mb-4"></hr>

            <Slide right>
              <a href="mailto:rafaelhenriques1993@gmail.com" className="contact-info-detail mt-4">
                <i className="fas fa-envelope-open icon-margin-contact"></i>{" "}
                rafael_henriques_@hotmail.com
              </a>
            </Slide>
            <hr className="custom_hr_red mt-4"></hr>
          </Col>

          <Col sm={12} md={1}></Col>

          <Col sm={12} md={6}>
            <Slide right>
              <h1 className="sendme_1">Do you want to work with me?</h1>
              <h1 className="sendme"><i class="fas fa-ellipsis-h icon-margin-contact ellipsis"></i> Send me a message</h1>
            </Slide>
            <hr className="custom_hr_red mt-4 mb-4"></hr>

            <Slide right>
              <form
                id="contact-form"
                method="POST"
                className="form-background"
                onSubmit={sendEmail}
              >
                <div className="form-group  mb-2">
                  <label htmlFor="name" className="label-form mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Insert your name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group  mb-2">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="label-form mb-2 "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control "
                    aria-describedby="emailHelp"
                    placeholder="Insert your email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group  mb-2">
                  <label htmlFor="message" className="label-form mb-2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write something"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="custom-btn-form mt-3">
                <i class="fas fa-paper-plane icon-margin-contact "></i> Submit
                </button>

                <div className={classes.root}>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success">
                      Message Sent
                    </Alert>
                  </Snackbar>
                </div>
              </form>
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
