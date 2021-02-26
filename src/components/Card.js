import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <div className="img-box">
        <img src={props.src} alt={props.alt} />
      </div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
