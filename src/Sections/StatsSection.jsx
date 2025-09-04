import React from "react";
import "../Styles/StatsSection.css"
import {
  heroOne,
  heroTwo,
  stats,
  statsContent,
  testimonial,
  clientLogos
} from "../Common/Content";
import Button from "../components/Button";

const StatsSection = () => {
  return (
    <div className="section-wrapper">
      <div className="hero">
        <div className="hero-left">
          <img src={heroOne.image} alt="Illustration" />
        </div>
        <div className="hero-right">
          <h2>{heroOne.heading}</h2>
          <p>{heroOne.text}</p>
          <Button variant="primary">Learn More</Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="Stat-Section">
        <div className="stats-left">
          <h3>
            {statsContent.heading} <br />
            <span>{statsContent.highlight}</span>
          </h3>
          <p>{statsContent.text}</p>
        </div>

        <div className="stats-right">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-box">
              <img src={stat.icon} alt={stat.label} />
              <div>
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className="hero">
        <div className="hero-left">
          <img src={heroTwo.image} alt="Footer Illustration" />
        </div>
        <div className="hero-right">
          <h2>{heroTwo.heading}</h2>
          <p>{heroTwo.text}</p>
          <Button variant="primary">Learn More</Button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial">
        <div className="testimonial-left">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="testimonial-right">
          <p>{testimonial.text}</p>
          <h4 className="testimonial-name">{testimonial.name}</h4>
          <p className="testimonial-role">{testimonial.role}</p>

          <div className="customer-logos">
            {clientLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`logo-${index + 1}`} />
            ))}
            <a href={testimonial.meetCustomersLink} className="meet-customers">
              Meet all customers <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
