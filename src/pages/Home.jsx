import React from "react";
import HeroSlider from "../components/Hero/HeroSlider";
import ToysSlider from "../components/Toys/ToysSlider";
import StationarySlider from "../components/Stationary/StationarySlider";
import GiftsSlider from "../components/Gifts/GiftsSlider";
function Home() {
  return (
    <>
      <HeroSlider />
      <ToysSlider category="toys" />
      <StationarySlider category="stationary" />
      <GiftsSlider category="gifts" />
    </>
  );
}

export default Home;
