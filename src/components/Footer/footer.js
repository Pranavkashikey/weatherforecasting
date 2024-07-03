import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const navigateToAbout = () => {
    navigate('/about');
     // Navigate to '/about' route
  };
  const navigateToService = () => {
    navigate('/services');
     // Navigate to '/about' route
  };

  const navigateToContact = () => {
    navigate('/contactus');
     // Navigate to '/about' route
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section abouto">
          <h1 className="logo-text"><span>Weather</span> Forecasting</h1>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#" onClick={navigateToAbout}>About</a></li>
            <li><a href="#" onClick={navigateToService}>Services</a></li>
            <li><a href="#" onClick={navigateToContact}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Send Your Doubts !</h2>
          <br />
          <form action="https://formspree.io/f/meojqapp" method="POST">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." required />
            <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..." required></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; weatherforecasting.com | Designed by Pranav and Madhu
      </div>
    </footer>
  );
};

export default Footer;
