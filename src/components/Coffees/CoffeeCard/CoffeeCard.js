import React from "react";

import "./CoffeeCard.scss";

const CoffeeCard = ({ coffee }) => {
  return (
    <div className="coffeecard">
      <div>
        <h3 className="coffeecard__title">
          <span className="fw-light">{coffee.category}</span>
          <span className="sp-wide">{coffee.title}</span>
        </h3>
      </div>
      <p className="coffeecard__field">
        <span className="fw-light">type:</span> {coffee.category} -{" "}
        {coffee.type}
      </p>
      <p className="coffeecard__field">
        <span className="fw-light">quantity:</span> {coffee.quantity}g
      </p>
      <p className="coffeecard__field coffeecard__price">
        <span className="fw-light">price:</span> ${coffee.price}
      </p>
    </div>
  );
};

export default CoffeeCard;
