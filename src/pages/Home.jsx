import React from "react";
import HeroSlider from "../components/Hero/HeroSlider";
import HomeSections from "../components/Home/HomeSections";
import SearchProductsGrid from "../search/SearchProductsGrid";
function Home() {
  return (
    <>
      <HeroSlider />

      <SearchProductsGrid
        CardComponent={HomeSections} // 🔥 important
      />
    </>
  );
}

export default Home;
