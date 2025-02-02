import { useState } from "react";
import GoldenRing from "../src/assets/img/ring8.png";

const HoverImageEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    // Define max movement range in percentage (e.g., ±5%)
    const maxMove = 5; // Image will move max 5% within the frame

    // Calculate percentage movement, inverted
    const offsetX = (0.5 - (e.clientX - left) / width) * (maxMove * 8);
    const offsetY = (0.5 - (e.clientY - top) / height) * (maxMove * 8);

    setPosition({
      x: Math.max(-maxMove, Math.min(maxMove, offsetX)),
      y: Math.max(-maxMove, Math.min(maxMove, offsetY)),
    });
  };

  return (
    <div
      className="relative w-80 h-80 overflow-hidden rounded-lg scale-90 hover:scale-125
      transition-transform duration-300 ease-in-out "
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })} // Reset on mouse leave
    >
      <img
        src={GoldenRing}
        alt="Hover Effect"
        className="absolute  top-0 left-0 w-full h-full object-cover transition-transform duration-300
        ease-out"
        style={{
          transform: `translate(${position.x}%, ${position.y}%)`,
        }}
      />
    </div>
  );
};

export default HoverImageEffect;
