import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HeroSection from "../components/HeroSection.jsx";
import StatsBar from "../components/StatsBar.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import TrustSafety from "../components/TrustSafety.jsx";
import Testimonials from "../components/Testimonials.jsx";
import "../styles/utils.css";
import "../styles/categories.css";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div className="page">
      <Navbar />

      <main className="page-content" style={{ maxWidth: '100%', paddingBottom: '0' }}>
        
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Stats Bar */}
        <StatsBar />

        {/* 3. How It Works */}
        <HowItWorks />

        {/* 4. Testimonials */}
        <Testimonials />

        {/* 5. Trust and Safety */}
        <TrustSafety />

      </main>

      <Footer />
    </div>
  );
};

export default HomePage;