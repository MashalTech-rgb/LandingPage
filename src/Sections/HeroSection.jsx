import React, { useState, useEffect } from 'react';
import '../Styles/HeroSection.css';
import { heroSlides } from '../Common/Content';
import Button from '../components/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="section">
      <div className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="hero-content">
              <h1>
                {slide.title} <br /> 
                <span className="highlighted-text">{slide.highlighted}</span>
              </h1>
              <p>{slide.description}</p>
             <Button variant='primary'>Register</Button>
            </div>
            <div className="hero-image">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <div className="slider-dots">
          {heroSlides.map((s, index) => (
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
