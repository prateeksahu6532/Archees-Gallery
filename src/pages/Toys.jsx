import React from "react";
import HomeSlider from "../components/Hero/HeroSlider";
import ToysCard from "../components/Toys/ToysCard";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { filterProducts } from "../search/filterProducts";
import ProductsData from "../components/ProductsData";
import SearchProductsGrid from "../search/SearchProductsGrid";
function Toys() {
  return (
    <>
      <HomeSlider category="toys" />
      <SearchProductsGrid category="toys" CardComponent={ToysCard} />
    </>
  );
}

export default Toys;
