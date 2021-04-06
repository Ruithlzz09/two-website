import React from "react";
import NavBar from "./NavBar";
import HeroSection from './HeroSection';
import Features from "./Features";
import CardSection from "./CardSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Features/>
      <CardSection/>
      <Footer/>
    </div>
  );
};

export default App;
