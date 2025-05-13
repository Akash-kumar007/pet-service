import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h5>About Us</h5>
          <p>
          Tailmate is your pet's best friend! We're passionate about making pet care convenient, accessible, and reliable. Whether you're traveling, need medical help for your furry friend, or just want to connect with other pet lovers, we have a service for you.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li><a href="/home" className="footer-link">Home</a></li>
            <li><a href="/aboutus" className="footer-link">About Us</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section social-media">
          <h5>Follow Us</h5>
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">YouTube</a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        © 2025 All Rights Reserved | TAILMATE
      </div>
    </footer>
  );
};

export default Footer;
