import React from "react";
import HomeSlider from "../components/Hero/HeroSlider";

import StationaryCard from "../components/Stationary/StationaryCard";
function Stationary() {
  return (
    <>
      <HomeSlider category="stationary" />

      <StationaryCard category="stationary" />
    </>
  );
}

export default Stationary;
