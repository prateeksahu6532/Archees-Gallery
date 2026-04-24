import React from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";
function CartItems() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  if (cart.length === 0) {
    return (
      <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
    );
  }
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <div className="px-4 md:px-10 py-10">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className=" bg-linear-to-t from-red-50 to-red-100 
            rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto h-60 w-80 "
            />
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-xl font-bold text-red-500">
              ${item.price.toFixed(2)}
            </p>
            <div className="mt-2 flex items-center justify-between">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="rounded-full  py-2 px-4 text-2xl font-bold bg-slate-200 text-slate-700 hover:bg-slate-300"
              >
                -
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="rounded-full py-2 px-4 text-2xl font-bold bg-slate-200 text-slate-700 hover:bg-slate-300"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-4 w-full rounded-md bg-red-500 py-2 px-4 text-white hover:bg-red-600"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-6 text-slate-900">
        Total: ${totalPrice.toFixed(2)}
      </h2>
    </div>
  );
}

export default CartItems;
