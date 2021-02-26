import React from "react";
import "./ImgTextSection.scss";

function ImgTextSection(props) {
  return (
    <div className={props.style == "reverse" ? "img-text reverse" : "img-text"}>
      <div className="img">
        <img src={props.src} />
      </div>
      <div className="text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ImgTextSection;
