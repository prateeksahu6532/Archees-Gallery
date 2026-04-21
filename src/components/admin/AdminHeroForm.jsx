import { useState } from "react";

function AdminHeroForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      image,
      category,
    };

    await fetch("https://69dcd40e84f912a264044129.mockapi.io/api/hero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    // reset form

    alert("Product added successfully ✅");
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      console.log("IMAGE:", reader.result);
      setImage(reader.result); // ✅ base64 string
    };
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Add Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          {/* Image URL */}

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          >
            <option value="">Select Category</option>
            <option value="toys">Toys</option>
            <option value="stationary">Stationary</option>
            <option value="gifts">Gifts</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition shadow-md hover:shadow-lg"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminHeroForm;
