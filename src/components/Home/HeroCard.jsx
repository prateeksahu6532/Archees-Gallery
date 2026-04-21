import { useEffect, useState } from "react";

function HeroCard() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  // 🔥 Fetch data from localStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://69dcd40e84f912a264044129.mockapi.io/api/hero",
        );
        const data = await response.json();
        const validData = data.filter((item) => item.image);
        // ✅ filter first
        const latestFive = validData.slice(-5).reverse(); // ✅ latest first
        setImages(latestFive);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // 🔥 Auto slide
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  // ❗ If no images
  if (images.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[300px] md:h-[400px]
     overflow-hidden rounded-xl shadow-lg"
    >
      {/* Images */}
      {images.map((item, index) => (
        <img
          key={item.id}
          src={item.image}
          alt={item.title}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
          }}
          className={`absolute w-full h-full object-cover
            z-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-white text-2xl md:text-4xl font-bold">
          {images[current]?.title}
        </h2>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HeroCard;
