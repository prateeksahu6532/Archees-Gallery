import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import SearchProductsGrid from "../search/SearchProductsGrid";
import CartItems from "../components/Cart/CartItems";
function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h2 className="text-2xl font-bold p-4">Your Cart</h2>

      <SearchProductsGrid
        data={cart} // 🔥 same grid now works for cart
        CardComponent={CartItems} // 🔥 normal UI
      />
    </>
  );
}

export default Cart;
