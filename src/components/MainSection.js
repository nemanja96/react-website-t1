import React from "react";
import "./MainSection.scss";
import Card from "./Card";
import ImgText from "./ImgText";

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
        <Card
          src="img/step-one.png"
          title="Step 1"
          description="Create your own design website"
        />
        <Card
          src="img/step-two.png"
          title="Step 2"
          description="Upload your image, logo, etc"
        />
        <Card
          src="img/step-three.png"
          title="Step 3"
          description="Verify your website with email account"
        />
        <Card
          src="img/step-four.png"
          title="Step 4"
          description="Publish your site to the internet world"
        />
      </div>
      <ImgText
        src="img/02.png"
        title="Trusted by big unicorn, startup, and all business"
        description="We commit for several year update and help big company"
      />
      <ImgText
        style="reverse"
        src="img/03.png"
        title="Customize awesome site with Website"
        description="Just drag and drop your design here and Let's rock!"
      />
    </div>
  );
}

export default MainSection;
