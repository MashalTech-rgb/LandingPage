import "./Footer.css";
const Footer = () => {
  return (
    <>
    <section className="demo">
      <h2>Pellentesque suscipit <br /> fringilla libero eu.</h2>
      <button className="demo-btn">
        Get a Demo <i class="fa-solid fa-arrow-right"></i>
      </button>
    </section>
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <h2 className="logo">Nexcent</h2>
          <p>Copyright © 2025 Nexcent. <br /> All rights reserved.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <h4>Stay up to date</h4>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit"><i class="fa-regular fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
