import React from "react";
import HomeSlider from "../components/Hero/HeroSlider";
import GiftsCard from "../components/Gifts/GiftsCard";
function Gifts() {
  return (
    <>
      <HomeSlider category="gifts" />
      <GiftsCard category="gifts" />
    </>
  );
}

export default Gifts;
