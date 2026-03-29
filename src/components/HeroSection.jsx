import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
// import { svgPlaceholder } from "../utils/svgPlaceholder.js";
import heroImage from "../assets/hero_image.png";
import HeroSlideshow from "./HeroSlideshow.jsx";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <HeroSlideshow />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge-premium">
          <span className="badge-icon">✨</span>
          <span className="badge-text">THE NEW STANDARD FOR ARTISANS</span>
        </div>
        
        <h1 className="hero-title">
          Connecting Customers <br/>
          with <br/>
          <span className="gold-text">Skilled Artisans</span>
        </h1>
        
        <p className="hero-description">
          Experience the most reliable marketplace for vetted <br/>
          professionals. Post jobs in seconds and hire with confidence.
        </p>
        
        <div className="hero-buttons">
          <Link to="/login" className="btn-premium primary">
            Get Started
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
          <Link to="/about" className="btn-premium secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
