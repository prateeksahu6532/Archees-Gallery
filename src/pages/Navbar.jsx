import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { AiOutlineGift, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineMenuBook, MdToys } from "react-icons/md";
import { HiOutlineLogin } from "react-icons/hi";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
const menuItems = [
  { name: "Toys", to: "/toys", icon: <MdToys className="h-5 w-5" /> },
  {
    name: "Stationary",
    to: "/stationary",
    icon: <MdOutlineMenuBook className="h-5 w-5" />,
  },
  { name: "Gifts", to: "/gifts", icon: <AiOutlineGift className="h-5 w-5" /> },
  {
    name: "Cart",
    to: "/cart",
    icon: <AiOutlineShoppingCart className="h-5 w-5" />,
  },
  { name: "Login", to: "/login", icon: <HiOutlineLogin className="h-5 w-5" /> },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow">
              A
            </div>
            <NavLink
              to="/"
              className="text-lg font-semibold tracking-tight text-slate-900"
            >
              Archees Gallery
            </NavLink>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <label className="relative w-full max-w-xl">
              <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search products"
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />
            </label>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                <span className="relative">
                  {item.icon}
                  {item.name === "Cart" && totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {totalItems}
                    </span>
                  )}
                </span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition duration-300 lg:hidden ${sidebarOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!sidebarOpen}
      >
        <div
          className={`absolute inset-0 bg-slate-900/40 transition-opacity ${sidebarOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setSidebarOpen(false)}
        />
        <aside
          className={`fixed left-0 top-0 bottom-0 z-50 flex w-72 flex-col gap-6 overflow-y-auto bg-white px-6 py-8 shadow-2xl transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-slate-900">Menu</p>
              <p className="mt-1 text-sm text-slate-500">Browse the site</p>
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                <span className="relative">
                  {item.icon}

                  {item.name === "Cart" && totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                      {totalItems}
                    </span>
                  )}
                </span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}

export default Navbar;
