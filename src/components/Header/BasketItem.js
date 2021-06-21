import React from "react";
import { connect } from "react-redux";

import { addToBasket, subtractFromBasket } from "../../actions";

import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";

const BasketItem = ({ name, amount, price, id, addToBasket, subtractFromBasket }) => {
  const defaultProduct = {
    id: id,
    name: name,
    price: price,
    amount: 1,
  };
  return (
    <li className="extended__item">
      <p className="extended__name fw-light">{name}</p>
      <div className="extended__control">
        <button className="extended__sign" onClick={() => subtractFromBasket(defaultProduct)}>
          <img src={minus} alt="minus btn" className="extended__icon" />
        </button>
        <p className="fw-bold extended__amount">{amount}</p>
        <button
          className="extended__sign"
          onClick={() => addToBasket(defaultProduct)}
        >
          <img src={plus} alt="plus btn" className="extended__icon" />
        </button>
      </div>
    </li>
  );
};

export default connect(null, { addToBasket, subtractFromBasket })(BasketItem);
