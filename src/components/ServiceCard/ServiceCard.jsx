import React, { useState } from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ title, description, icon, iconHover }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      className="service__card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="service__icon">
        <img src={hovered ? iconHover : icon} alt={title} />
      </div>
      <h2 className="service__title">{title}</h2>
      {/*<p className="service__description">{description}</p>*/}
    </a>
  );
};

export default ServiceCard;
