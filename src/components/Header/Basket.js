import React from "react";

import blackbasket from "../../assets/icons/black-basket.svg";
import "./Basket.scss";
const Basket = () => {
  return (
    <div className="basket">
      <p className="basket__value">$67.99</p>
      <div className="basket__control">
        <img src={blackbasket} className="basket__icon" alt="basket" />
        <div className="basket__total">3</div>
      </div>
    </div>
  );
};

export default Basket;
