import React from "react";
import "./MainSection.scss";
import Card from "./Card";
import ImgTextSection from "./ImgTextSection";

function MainSection() {
  return (
    <div className="main-section">
      <h1>Create your own website</h1>
      <p>
        Create your own website just in few days.
        <br />
        Use our awesome tools to make your dream come true
      </p>
      <div className="cards">
        <div className="cards-box">
          <Card
            src="img/step-one.png"
            alt="Design"
            title="Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            src="img/step-two.png"
            alt="Uploading"
            title="Upload"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="cards-box">
          <Card
            src="img/step-three.png"
            alt="Email"
            title="Deploy"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            src="img/step-four.png"
            alt="Celebration"
            title="Celebrate"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
      <ImgTextSection
        src="img/02.png"
        title="Trusted by big unicorn, startup, and all business"
        description="We commit for several year update and help big company"
      />
      <ImgTextSection
        style="reverse"
        src="img/03.png"
        title="Customize awesome site with Website"
        description="Just drag and drop your design here and Let's rock!"
      />
    </div>
  );
}

export default MainSection;
