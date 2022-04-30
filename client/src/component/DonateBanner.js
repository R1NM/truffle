import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style/card.css";
function DonateBanner(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${props.id}`, {
      state: {
        project_id: props.id,
        project_img: props.img,
        project_title: props.title,
        project_description: props.description,
      },
    });
  };
  return (
    <div className="card" onClick={handleClick}>
      <Card.Img variant="top" src={props.img} alt="prj-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description.slice(0, 150)} ... </Card.Text>
      </Card.Body>
    </div>
  );
}

export default DonateBanner;
