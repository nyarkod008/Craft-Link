import React from "react";
import artisanImg from "../assets/engineer.jpg";

const steps = [
  {
    number: "01",
    title: "Post Your Job",
    desc: "Describe the service you need and submit your request. It takes less than 2 minutes.",
  },
  {
    number: "02",
    title: "Get Matched",
    desc: "Skilled, vetted artisans near you respond quickly with quotes and availability.",
  },
  {
    number: "03",
    title: "Hire the Best",
    desc: "Choose the best artisan and get the job done professionally — guaranteed.",
  },
];

const HowItWorks = () => {
  return (
    <section className="hiw-section">
      {/* Left — Image */}
      <div className="hiw-image-col">
        <img src={artisanImg} alt="Professional artisan ready to work" className="hiw-image" />
      </div>

      {/* Right — Content */}
      <div className="hiw-content-col">
        <p className="hiw-label">Simple Process</p>
        <h2 className="hiw-title">
          How It <span className="text-gold">Works</span>
        </h2>
        <p className="hiw-subtitle">
          Getting the right artisan is simple and fast. Follow these three easy steps.
        </p>

        <div className="hiw-steps">
          {steps.map((step, i) => (
            <div key={i} className="hiw-step">
              <div className="hiw-step-number">{step.number}</div>
              <div className="hiw-step-text">
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
