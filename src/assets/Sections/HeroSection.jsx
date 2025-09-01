import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Lessons and insights",
      highlighted: "from 8 years",
      description: "Where to grow your business as a photographer: site or social media?",
      image: "/images/HeroSection 1.png"
    },
    {
      title: "Elevate your photography",
      highlighted: "brand identity",
      description: "Create a distinctive brand that resonates with your target audience and stands out in a competitive market.",
      image: "/images/HeroSection 2.png"
    },
    {
      title: "Pricing strategies",
      highlighted: "that maximize profit",
      description: "Learn to price your photography services competitively while ensuring your business remains profitable.",
      image: "/images/HeroSection 3.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="hero-content">
              <h1>
                {slide.title} <br /> <span className="highlighted-text">{slide.highlighted}</span>
              </h1>
              <p>{slide.description}</p>
              <button className="primary-btn">Register</button>
            </div>
            <div className="hero-image">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-controls">
        <div className="slider-dots">
          {slides.map((s, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;