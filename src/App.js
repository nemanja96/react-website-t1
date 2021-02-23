import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <MainSection />
      <PricingSection />
      <Footer />
    </>
  );
}

export default App;
