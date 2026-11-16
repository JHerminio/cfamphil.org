import React, { useState, useEffect } from "react";
import cfamCommunityImg from "../images/webp/cfam-Community.webp";
import cfamFin from "../images/webp/cfam-fin.webp";
import cfamTrellis from "../images/webp/cfam-Trellis.webp";
import cfamPicWithCardinal from "../images/webp/cfam-pic-with-Cardinal.webp";
import cfamFront from "../images/webp/cfam-front.webp";

const slides = [
  {
    url: cfamCommunityImg,
    title: "First Slide",
    caption: "Description for the first slide",
  },
  {
    url: cfamFin,
    title: "Second Slide",
    caption: "Description for the second slide",
  },
  {
    url: cfamTrellis,
    title: "Third Slide",
    caption: "Description for the third slide",
  },
  {
    url: cfamPicWithCardinal,
    title: "Fourth Slide",
    caption: "Description for the fourth slide",
  },
  {
    url: cfamFront,
    title: "Fifth Slide",
    caption: "Description for the fifth slide",
  },
];

function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-play every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Mobile swipe handlers
  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide(); // Swiped left
    } else if (distance < -minSwipeDistance) {
      prevSlide(); // Swiped right
    }
  };

  return (
    <div
      style={styles.container}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sliding Track */}
      <div
        style={{
          ...styles.track,
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} style={styles.slide}>
            <img src={slide.url} alt={slide.title} style={styles.image} />
          </div>
        ))}
      </div>

      {/* Left / Right Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        style={{ ...styles.arrow, left: "clamp(8px, 2vw, 16px)" }}
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        style={{ ...styles.arrow, right: "clamp(8px, 2vw, 16px)" }}
      >
        ❯
      </button>

      {/* Bottom Dots */}
      <div style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.dot,
              backgroundColor:
                currentIndex === index ? "#fff" : "rgba(255,255,255,0.5)",
              transform: currentIndex === index ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "clamp(240px, 55vw, 600px)",
    overflow: "hidden",
    borderRadius: "8px",
    touchAction: "pan-y",
  },
  track: {
    display: "flex",
    width: "100%",
    height: "100%",
    transition: "transform 0.5s ease-in-out",
  },
  slide: {
    position: "relative",
    minWidth: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    userSelect: "none",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    color: "#fff",
    border: "none",
    fontSize: "clamp(16px, 3vw, 24px)",
    width: "clamp(32px, 6vw, 44px)",
    height: "clamp(32px, 6vw, 44px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "50%",
    zIndex: 2,
  },
  dotsContainer: {
    position: "absolute",
    bottom: "12px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    zIndex: 2,
  },
  dot: {
    width: "clamp(8px, 2vw, 10px)",
    height: "clamp(8px, 2vw, 10px)",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default SimpleCarousel;
