import React from "react";
import { Link } from "react-router-dom";

const services = [
  { title: "Carpenter", icon: "🪚", description: "Services from highly vetted and certified artisans" },
  { title: "Mason", icon: "🧱", description: "Services from highly vetted and certified artisans" },
  { title: "Plumber", icon: "🚰", description: "Services from highly vetted and certified artisans" },
  { title: "Painter", icon: "🎨", description: "Services from highly vetted and certified artisans" },
  { title: "Electronics Repairer", icon: "🔌", description: "Services from highly vetted and certified artisans" },
  { title: "Electrician", icon: "⚡", description: "Services from highly vetted and certified artisans" },
  { title: "Mechanic", icon: "🔧", description: "Services from highly vetted and certified artisans" },
  { title: "Tailor", icon: "🧵", description: "Services from highly vetted and certified artisans" },
  { title: "Seamstress", icon: "✂️", description: "Services from highly vetted and certified artisans" },
  { title: "Auto Electrician", icon: "🚗", description: "Services from highly vetted and certified artisans" },
  { title: "IT Services", icon: "💻", description: "Services from highly vetted and certified artisans" },
  { title: "Graphic Designer", icon: "🖌️", description: "Services from highly vetted and certified artisans" },
];

const FeaturedServices = () => {
  return (
    <section className="featured-services-section">
      <div className="featured-services-inner">
        <div className="featured-services-header">
          <h2 className="featured-services-title">
            Our Featured <span className="text-gold">Services</span>
          </h2>
          <p className="featured-services-subtitle">
            No matter your needs, we've got you covered. Post your job requests
            and get connected to vetted and reliable service providers.
          </p>
        </div>

        <div className="featured-services-grid">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/search?service=${service.title}`}
              className="fs-card"
            >
              <div className="fs-card-icon">{service.icon}</div>
              <h3 className="fs-card-title">{service.title}</h3>
              <p className="fs-card-desc">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="featured-services-cta">
          <Link to="/service-request" className="view-all-btn">
            VIEW ALL SERVICES →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
