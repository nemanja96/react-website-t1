import React from "react";
import "./PricingSection.scss";
import Button from "./Button";

function PricingCard(props) {
  return (
    <div className="pricing-card">
      <h3>{props.subtitle}</h3>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Button title={props.btn} />
    </div>
  );
}

export default PricingCard;
