import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Thumbnail(props) {
  return (
    <Link to={props.link}>
      <Card className="card-style" style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          className="card-img"
          src={props.imgurl}
          alt={props.title}
        />

        <Card.Body className="text-center card-body-style overlay">
          <Card.Title className="text-center card-title">
            {props.title}
          </Card.Title>
          <Card.Text className="text-center card-text">
            {props.category}
          </Card.Text>
          <Button className="btn-thumb btn-thumb-text text-center">
          <i className="fas fa-eye"></i>
          </Button>{" "}
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Thumbnail;
