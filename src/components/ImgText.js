import React from "react";
import "./ImgText.scss";

function ImgText(props) {
  return (
    <div className={props.style == "reverse" ? "img-text2" : "img-text"}>
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

export default ImgText;
