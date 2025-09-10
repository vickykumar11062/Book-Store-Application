import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* Social Media Section */}
      <div className="social-media">
        <p>Follow us on</p>
        <ul>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me" target="_blank" rel="noreferrer">
              <i className="bi bi-telegram"></i>
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Lower Footer Sections */}
      <div className="lower-footer">
        <div className="links section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="contact section">
          <h3>Contact Info</h3>
          <ul>
            <li>Jodhpur, Rajasthan</li>
            <li>+91 9128634469</li>
            <li>example@email.com</li>
          </ul>
        </div>

        <div className="about section">
          <h3>About</h3>
          <p>
            BookNest is your one-stop online bookstore. From novels to research 
            papers, we provide a wide collection to fuel your reading journey.
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BookNest | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
