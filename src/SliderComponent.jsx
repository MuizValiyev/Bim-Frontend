import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./App.css"; // Make sure to import the CSS file

const BimLocationSlider = () => {
  // Sample data for demonstration
  const images = [
    "/src/assets/drink.png",
    "/src/assets/drink.png",
    "/src/assets/drink.png",
    "/src/assets/drink.png",
    "/src/assets/Image.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="slider-section">
      <h2 className="slider-title">Вы можете найти нас тут</h2>
      <p className="slider-subtitle">Bim в центре города!</p>
      <p className="slider-address">
        Мирзо-Улугбекский район, массив Буюк Ипак Йули 24
      </p>

      <div className="slider-container">
        <button
          onClick={goToPrevious}
          className="slider-button slider-button-left"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="slider-image-wrapper">
          <img
            src={images[currentIndex]}
            alt="BIM локации"
            className="slider-image"
          />
        </div>
        <button
          onClick={goToNext}
          className="slider-button slider-button-right"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="slider-button-adaptive-box">
        <button
          onClick={goToPrevious}
          className="slider-button-adaptive slider-button-left"
          aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="slider-button-adaptive slider-button-right"
          aria-label="Next slide">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default BimLocationSlider;
