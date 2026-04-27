import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { AiOutlineGift, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineMenuBook, MdToys } from "react-icons/md";
import { HiOutlineLogin } from "react-icons/hi";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { AuthContext } from "../components/AuthContext"; 

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
 
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cart, searchTerm, category, setSearchTerm, setCategory } =
    useContext(CartContext);
    const { user, logout } = useContext(AuthContext);
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
                onChange={(e) => setSearchTerm(e.target.value)}
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
          {/* 👤 USER SECTION */}
            {user ? (
              <div className="flex items-center gap-3 ml-3">

                <NavLink to="/profile" className="flex items-center gap-2">

                  {/* Avatar */}
                  {user.image ? (
                    <img
                      src={user.image}
                      className="h-9 w-9 rounded-full object-cover border"
                    />
                  ) : (
                    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-red-500 text-white font-bold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <span className="text-sm">{user.name}</span>
                </NavLink>

                <button
                  onClick={logout}
                  className="text-red-500 text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="ml-3 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-100"
              >
                <HiOutlineLogin />
                Login
              </NavLink>
            )}
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </header>

      {/* 📱 MOBILE SIDEBAR */}
      <div className={`${sidebarOpen ? "block" : "hidden"} lg:hidden`}>
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        />

        <div className="fixed left-0 top-0 w-72 h-full bg-white p-6 shadow-lg">

          <button onClick={() => setSidebarOpen(false)}>
            <FiX size={24} />
          </button>

          {/* Menu */}
          <div className="mt-6 flex flex-col gap-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-100"
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* 👤 Mobile User */}
          <div className="mt-6 border-t pt-4">
            {user ? (
              <>
                <div className="flex items-center gap-2">
                  {user.image ? (
                    <img
                      src={user.image}
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <div className="h-8 w-8 flex items-center justify-center bg-red-500 text-white rounded-full">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span>{user.name}</span>
                </div>

                <button
                  onClick={logout}
                  className="text-red-500 mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;