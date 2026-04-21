import ProductsData from "../ProductsData";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
function StationaryCard({ items }) {
  const { addToCart, cart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };
  const stationary = ProductsData.filter(
    (item) => item.category === "stationary",
  );

  return (
    <div
      className="px-4 md:px-10 py-10
     bg-gradient-to-t from-red-50 to-red-100 rounded-2xl"
    >
      {/* Heading */}

      {/* Show More Button */}

      <h2 className="text-3xl md:text-4xl font-serif font-semi-bold mb-6">
        Latest Stationary Collection
      </h2>

      {/* Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-6"
      >
        {stationary.map((item) => (
          <div key={item.id} className="w-full ">
            {/* 👇 group only on image */}
            <div className="bg-white p-6 shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden rounded-xl shadow-lg hover:rounded-b-none">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition
                   duration-300 group-hover:scale-110"
                />
              </div>

              {/* 👇 DETAILS (hidden by default) */}

              <h3 className="text-lg font-bold mt-2">{item.title}</h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.description || "Best quality toy"}
              </p>

              <p className="text-blue-600 font-semibold text-xl mt-2">
                ₹{item.price || "299"}
              </p>

              {isInCart(item.id) ? (
                <div className="flex items-center pb-2 text-lg">
                  <button
                    className="bg-gray-100 px-4 m-2 rounded-l-lg"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="px-3">
                    {cart.find((i) => i.id === item.id)?.quantity || 0}
                  </span>
                  <button
                    className="bg-gray-100 px-4 m-2 rounded-r-lg"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-500 text-white px-3 py-1 my-2 rounded"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StationaryCard;
