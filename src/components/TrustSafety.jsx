import React from "react";
import trustImg from "../assets/trust_safety.png";

const TrustSafety = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Secure Payments",
      desc: "Only release payment when the job is completed to your satisfaction."
    },
    {
      icon: "⭐",
      title: "Trusted Ratings & Reviews",
      desc: "Pick the right person for the task based on real ratings and reviews from other users."
    },
    {
      icon: "📋",
      title: "Insurance for Peace of Mind",
      desc: "We provide liability insurance for artisans performing tasks on CraftLink."
    }
  ];

  return (
    <section className="trust-safety-section">
      <div className="trust-safety-container">
        {/* Left Side: Image + Multi-Badge Cloud */}
        <div className="trust-image-wrapper">
          {/* Main 5.0 Rating Badge */}
          <div className="rating-badge">
            <div className="badge-info">
              <h5>5.0 ★</h5>
              <p>Overall Rating</p>
            </div>
          </div>

          {/* New Floating Trust Signals (Inspired by Airtasker) */}
          <div className="trust-signal signal-1">
            <span className="signal-icon">👍</span>
            <div className="signal-text">
              <strong>Job completed</strong>
              <span>2m ago</span>
            </div>
          </div>

          <div className="trust-signal signal-2">
            <span className="signal-icon">✔️</span>
            <div className="signal-text">
              <strong>Payment released</strong>
              <span>2m ago</span>
            </div>
          </div>

          <img 
            src={trustImg} 
            alt="Trusted CraftLink Artisan" 
            className="trust-artisan-img" 
          />
        </div>

        {/* Right Side: Content */}
        <div className="trust-content">
          <h2 className="trust-title">
            Trust and Safety Features <br/>
            <span className="text-gold">for Your Protection</span>
          </h2>
          
          <div className="trust-feature-list">
            {features.map((feature, index) => (
              <div key={index} className="trust-feature-item">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default TrustSafety;
