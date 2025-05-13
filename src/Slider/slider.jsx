import React, { useState } from "react";
import "./slider.css"
const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "https://img.freepik.com/free-photo/ai-generated-labrador-retriever-dog-picture_23-2150644696.jpg?t=st=1744715501~exp=1744719101~hmac=db8f606890253c9a87bec31727764937cb04733e1bc3865040fce134179d2287&w=1380",
      // title: "Free $20 eGift Card",
      // description: "With your $49+ order.",
    },
    {
      id: 2,
      image: "https://www.purina.in/sites/default/files/2020-12/The%20History%20of%20CatsHERO.jpg",
      // title: "Save 35% Today",
      // description: "Set up Autoship and save more!",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg",
      // title: "Free Delivery on Orders Over $35",
      // description: "First-time customers only!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slide">
        <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
        <div className="slide-content">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
          {/* <button className="shop-btn">Shop Now</button> */}
        </div>
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
