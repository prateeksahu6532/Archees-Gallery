import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Toys from "./pages/Toys";
import Stationary from "./pages/Stationary";
import Gifts from "./pages/Gifts";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Admin from "./pages/admin";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Cancellations from "./pages/Cancellations";
import AdminLogin from "./components/admin/adminlogin";
import Privacy from "./pages/Privacy";
import Footer from "./pages/Footer";
import Registration from "./pages/Registration"
import FloatingSocialSidebar from "./components/FloatingSocialSidebar";

// ✅ IMPORT CONTEXTS
import { CartProvider } from "./components/CartContext";
import { AuthProvider } from "./components/AuthContext";

// ✅ IMPORT PROTECTED ROUTE + PROFILE
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      {/* ✅ FIRST AUTH */}
      <AuthProvider>
        {/* ✅ THEN CART */}
        <CartProvider>
          <div className="min-h-screen bg-slate-50">
            <Navbar />
            <FloatingSocialSidebar />

            <main className="pt-28 px-4 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/toys" element={<Toys />} />
                <Route path="/stationary" element={<Stationary />} />
                <Route path="/gifts" element={<Gifts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />

                {/* 🔐 Protected Route */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />

                <Route path="/about" element={<About />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cancellations" element={<Cancellations />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;