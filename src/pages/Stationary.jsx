import React from "react";
import HomeSlider from "../components/Hero/HeroSlider";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { filterProducts } from "../search/filterProducts";
import ProductsData from "../components/ProductsData";
import StationaryCard from "../components/Stationary/StationaryCard";
import SearchProductsGrid from "../search/SearchProductsGrid";
function Stationary() {
  const { category, searchTerm } = useContext(CartContext);
  const filtered = searchTerm
    ? filterProducts(ProductsData, searchTerm)
    : ProductsData.filter((product) => product.category === "stationary");
  return (
    <>
      <HomeSlider category="stationary" />
      <SearchProductsGrid
        category="stationary"
        CardComponent={StationaryCard}
      />
    </>
  );
}

export default Stationary;
