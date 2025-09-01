import React from "react";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Caring is the new marketing</h2>
        <p>
          The Nexcent blog is the best place to read about the latest membership insights, 
          trends and more. See who's joining the community, read about how our community 
          are increasing their membership income and lot's more.
        </p>
      </div>

      <div className="blog-posts">
        <div className="blog-card">
          <div className="blog-image-container">
            <img 
              src="/images/Blog 1.png" 
              alt="Creating Streamlined Safeguarding Processes with OneRen" 
            />
            <div className="overlay-card">
              <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
              <a href="#" className="read-more">Readmore <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-image-container">
            <img 
              src="/images/Blog 2.png" 
              alt="What are your safeguarding responsibilities and how can you manage them?" 
            />
            <div className="overlay-card">
              <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
              <a href="#" className="read-more">Readmore <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-image-container">
            <img 
              src="/images/Blog 3.png" 
              alt="Revamping the Membership Model with Triathlon Australia" 
            />
            <div className="overlay-card">
              <h3>Revamping the Membership Model with Triathlon Australia</h3>
              <a href="#" className="read-more">Readmore <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;