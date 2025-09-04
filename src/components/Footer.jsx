import "../Styles/Footer.css"
import Button from "./Button";
import Logo from "../components/Logo";
import { footerLinks,socialLinks } from "../Common/Content";
const Footer = () => {
  return (
    <>
    <section className="demo">
      <h2>Pellentesque suscipit <br /> fringilla libero eu.</h2>
     <Button variant="primary">Get a Demo <i class="fa-solid fa-arrow-right"></i></Button>
    </section>
    <footer className="footer">
      <div className="container">
        {/* Left Side */}
        <div className="footer-left">
        <Logo textColor="var(--bg-light, #f9f9f9)" />
          <p>Copyright © 2025 Nexcent. <br /> All rights reserved.</p>
         <div className="social-icons">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
  <div>
    <h4>Company</h4>
    <ul>
      {footerLinks.company.map((item, index) => (
        <li key={index}><a href={item.link}>{item.name}</a></li>
      ))}
    </ul>
  </div>
  <div>
    <h4>Support</h4>
    <ul>
      {footerLinks.support.map((item, index) => (
        <li key={index}><a href={item.link}>{item.name}</a></li>
      ))}
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
