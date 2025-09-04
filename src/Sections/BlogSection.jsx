import React from "react";
import "../Styles/BlogSection.css";
import { blogHeader, blogPosts } from "../Common/Content";

const BlogSection = () => {
  return (
    <section className="blog-section">
      {/* Blog Header */}
      <div className="blog-header">
        <h2>{blogHeader.title}</h2>
        <p>{blogHeader.description}</p>
      </div>

      {/* Blog Posts */}
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image-container">
              <img src={post.image} alt={post.title} />
              <div className="overlay-card">
                <h5>{post.title}</h5>
                <a href={post.link} className="read-more">Readmore <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
