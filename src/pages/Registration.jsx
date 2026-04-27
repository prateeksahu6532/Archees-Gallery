import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Registration() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
const inputClass =
  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 validation
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    register(form);
    navigate("/login");
  };
  const handleImageUpload = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setForm((prev) => ({
      ...prev,
      image: reader.result, // base64 string
    }));
  };

  reader.readAsDataURL(file);
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-50 to-blue-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-2xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        {/* 👤 Basic Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <input name="name" placeholder="Full Name" className={inputClass}
 onChange={handleChange} />
          <input name="email" type="email" placeholder="Email"   className={inputClass}
 onChange={handleChange} />
          <input name="phone" placeholder="Phone Number"   className={inputClass}
 onChange={handleChange} />
          <input
  type="file"
  accept="image/*"
  onChange={handleImageUpload}
   className={inputClass}

/>
        </div>

        {/* 🔐 Password */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <input name="password" type="password" placeholder="Password"   className={inputClass}
 onChange={handleChange} />
          <input name="confirmPassword" type="password" placeholder="Confirm Password"   className={inputClass}
 onChange={handleChange} />
        </div>

        {/* 📍 Address */}
        <div className="mt-4">
          <input name="address" placeholder="Address"   className={inputClass} onChange={handleChange} />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <input name="city" placeholder="City"   className={inputClass}
 onChange={handleChange} />
          <input name="state" placeholder="State"   className={inputClass}
 onChange={handleChange} />
          <input name="pincode" placeholder="Pincode"   className={inputClass}
 onChange={handleChange} />
          <input name="country" placeholder="Country"   className={inputClass}
 onChange={handleChange} />
        </div>

        {/* Button */}
        <button className="w-full mt-6 bg-gradient-to-r from-red-500 to-blue-500 text-white py-2 rounded-lg hover:scale-105 transition">
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Registration;