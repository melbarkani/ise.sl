import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service__card">
      <div className="service__icon">{icon}</div>
      <h2 className="service__title">{title}</h2>
    </div>
  );
}

export default ServiceCard;