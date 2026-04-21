import ProductsData from "../ProductsData";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
function StationarySlider({ items }) {
  const { addToCart, cart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };
  const stationary = ProductsData.filter(
    (item) => item.category === "stationary",
  ).slice(0, 4);

  return (
    <div
      className="px-4 md:px-10 py-10
     bg-white my-10 rounded-2xl"
    >
      {/* Heading */}

      {/* Show More Button */}
      <div className="flex justify-between">
        <h2 className="text-3xl md:text-4xl font-serif font-semi-bold mb-6">
          Latest Stationary Collection
        </h2>
        <Link
          to="/stationary"
          className="bg-gradient-to-r from-blue-500 to-red-500 text-white
           px-6 py-1 my-3 rounded-lg hover:bg-blue-600 transition"
        >
          See More
        </Link>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stationary.map((item) => (
          <div key={item.id} className="w-full">
            {/* 👇 group only on image */}
            <div className="group">
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
              <div
                className="max-h-0 overflow-hidden 
      group-hover:max-h-80 
      transition-all duration-300 bg-white rounded-b-xl shadow-lg px-4"
              >
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default StationarySlider;
