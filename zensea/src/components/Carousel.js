import React, { useState, useEffect } from "react";
import "../css/Carousel.css"; 

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatic play the carousel every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? "active" : ""}`}
        >
          <div>
            <img src={image} alt={`Slide ${index + 1}`} className="img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
