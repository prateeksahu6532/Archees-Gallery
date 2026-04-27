import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(form.email, form.password);

    if (success) {
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-xl shadow w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input type="email" placeholder="Email" className="input"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <input type="password" placeholder="Password" className="input mt-3"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded">
          Login
        </button>

        <p className="text-sm text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;