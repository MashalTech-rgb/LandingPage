import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <div className="section-wrapper">
      {/* Hero Section (white) */}
      <div className="hero">
        <div className="hero-left">
          <img src="/images/HeroSection 2.png" alt="Illustration" />
        </div>
        <div className="hero-right">
          <h2>The unseen of spending three years at Pixelgrade</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            harum nesciunt quae eaque facere possimus. Minus quia vero saepe
            voluptatibus rem tempora quasi molestiae soluta fugiat deleniti!
            Neque, odio assumenda.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div className="stats-left">
          <h3>
            Helping a local <br />
            <span>business reinvent itself</span>
          </h3>
          <p>We reached here with our hard work and dedication</p>
        </div>

        <div className="stats-right">
          <div className="stat-box">
            <img src="/images/Member.png" alt="members" />
            <div>
              <h4>2,245,341</h4>
              <p>Members</p>
            </div>
          </div>
          <div className="stat-box">
            <img src="/images/Club.png" alt="clubs" />
            <div>
              <h4>46,328</h4>
              <p>Clubs</p>
            </div>
          </div>
          <div className="stat-box">
            <img src="/images/Event.png" alt="events" />
            <div>
              <h4>828,867</h4>
              <p>Event Bookings</p>
            </div>
          </div>
          <div className="stat-box">
            <img src="/images/Payment.png" alt="payments" />
            <div>
              <h4>1,926,436</h4>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-left">
          <img src="/images/HeroSection 3.png" alt="Footer Illustration" />
        </div>
        <div className="hero-right">
          <h2>
            How to design your site footer like <br /> we did
          </h2>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial ">
        <div className="testimonial-left">
          <img src="/images/image 9.png" alt="Customer" />
        </div>
        <div className="testimonial-right">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h4 className="testimonial-name">Tim Smith</h4>
          <p className="testimonial-role">
            British Dragon Boat Racing Association
          </p>

          <div className="customer-logos">
            <img src="/images/Logo (6).png" alt="logo1" />
            <img src="/images/Logo (1).png" alt="logo2" />
            <img src="/images/Logo (2).png" alt="logo3" />
            <img src="/images/Logo (3).png" alt="logo4" />
            <img src="/images/Logo (4).png" alt="logo5" />
            <a href="/images/Logo (5).png" className="meet-customers">
              Meet all customers <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
