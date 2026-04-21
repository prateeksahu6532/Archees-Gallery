import React from "react";
import HomeSlider from "../components/Hero/HeroSlider";
import ToysCard from "../components/Toys/ToysCard";
function Toys() {
  return (
    <>
      <HomeSlider category="toys" />
      <ToysCard category="toys" />
    </>
  );
}

export default Toys;
