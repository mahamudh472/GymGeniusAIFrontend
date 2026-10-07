import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              GymGenius <span className="gradient-text">AI</span>
            </Link>
            <p className="footer-description">
              Your personal AI-powered fitness coach. Tailored workouts, real-time guidance, and intelligent tracking.
            </p>
          </div>
          <div className="footer-links">
            <h4>App</h4>
            <a href="#features">Features</a>
            <a href="#download">Download</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <a href="#terms">Terms of Service</a>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <a href="mailto:support@gymgeniusai.com">Contact Us</a>
            <a href="#faq">FAQ</a>
            <a href="#help">Help Center</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GymGenius AI. All rights reserved.</p>
          <div className="social-links">
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
