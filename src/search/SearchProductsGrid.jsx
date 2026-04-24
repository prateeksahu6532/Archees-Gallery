import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { filterProducts } from "./filterProducts";
import ProductsData from "../components/ProductsData";

function SearchProductsGrid({ category, CardComponent }) {
  const { searchTerm } = useContext(CartContext);
  const filteredProducts = filterProducts(ProductsData, searchTerm);
  if (searchTerm) {
    return filteredProducts.length > 0 ? (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((item) => (
          <div key={item.id}>
            <img src={item.image} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center p-4">No products found</p>
    );
  }

  // 🟢 Normal Mode
  return <CardComponent />;
}

export default SearchProductsGrid;
