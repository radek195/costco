import React from "react";
import { connect } from "react-redux";

import { addToBasket } from "../../../actions";

import whiteBasket from "../../../assets/icons/white-basket.svg";
import "./CoffeeCard.scss";

const CoffeeCard = ({ coffee, addToBasket }) => {
  return (
    <div className="coffeecard">
      <div
        className="add-basket"
        onClick={() => {
          addToBasket(coffee.productId);
        }}
      >
        <img src={whiteBasket} alt="white basket" />
      </div>
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

export default connect(null, { addToBasket })(CoffeeCard);
