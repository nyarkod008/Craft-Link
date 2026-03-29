import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, name, linkTo = "/service-request" }) => {
  return (
    <Link to={linkTo} className="category-card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h3>{name}</h3>
        <span className="card-arrow">→</span>
      </div>
    </Link>
  );
};

export default ServiceCard;
