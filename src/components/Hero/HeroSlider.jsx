import { useEffect, useState } from "react";
import Data from "./Data"; // 👈 tumhara array

function HeroSlider({ category }) {
  const [current, setCurrent] = useState(0);
  const filteredData = category
    ? Data.filter((item) => item.category === category)
    : Data;

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === filteredData.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredData]);
  // ⬅️ Prev button
  const prevSlide = () => {
    setCurrent(current === 0 ? filteredData.length - 1 : current - 1);
  };

  // ➡️ Next button
  const nextSlide = () => {
    setCurrent(current === filteredData.length - 1 ? 0 : current + 1);
  };

  return (
    <div
      className="relative w-full h-[300px] md:h-[500px] 
     rounded-xl mb-10"
    >
      {/* Images */}
      {filteredData.map((item, index) => (
        <img
          key={item.id}
          src={item.image}
          alt={item.title}
          className={`absolute w-full h-full
             transition-opacity duration-1000 ${
               index === current ? "opacity-100" : "opacity-0"
             }`}
        />
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-white text-2xl md:text-4xl font-bold">
          {filteredData[current].title}
        </h2>
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute  left-4 top-1/2 -translate-y-1/2 bg-transparent px-3 py-1 rounded-2xl"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent px-3 py-1 rounded"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {filteredData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
