import React from "react";
import HomeSlider from "../components/Hero/HeroSlider";
import GiftsCard from "../components/Gifts/GiftsCard";
import SearchProductsGrid from "../search/SearchProductsGrid";
import ProductsData from "../components/ProductsData";
function Gifts() {
  return (
    <>
      <HomeSlider category="gifts" />
      <SearchProductsGrid category="gifts" CardComponent={GiftsCard} />
    </>
  );
}

export default Gifts;
