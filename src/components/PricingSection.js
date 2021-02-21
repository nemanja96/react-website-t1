import React from "react";
import "./PricingSection.scss";
import PricingCard from "./PricingCard";

function PricingSection() {
  return (
    <div className="pricing-section">
      <h1>Special Pricing</h1>
      <p>Choose your best price and get our best service then.</p>
      <div className="pricing-cards">
        <PricingCard
          subtitle="Free"
          title="$0"
          description="Customize your site and use our domain"
          btn="Get Started"
        />
        <PricingCard
          subtitle="Hosting"
          title="$39"
          description="Find your domain name that you want"
          btn="Get Started"
        />
        <PricingCard
          subtitle="Cloud Hosting"
          title="$60"
          description="High resource capacity, full management"
          btn="Get Started"
        />
      </div>
    </div>
  );
}

export default PricingSection;
