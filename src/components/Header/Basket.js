import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import BasketItem from "./BasketItem";

import blackbasket from "../../assets/icons/black-basket.svg";
import "./Basket.scss";

const Basket = ({ basket, addToBasket, subtractFromBasket }) => {
  const [value, setValue] = useState(0);
  const [extended, setExtended] = useState(false);

  const basketRef = useRef(null);

  window.addEventListener("click", (e) => {
    if (
      basketRef.current !== e.target &&
      !basketRef.current.contains(e.target)
    ) {
      setExtended(false);
    }
  });

  useEffect(() => {
    let total = 0;
    for (let products of basket) {
      total += products.price * products.amount;
    }
    setValue(Math.round(total * 100) / 100);
  }, [basket]);

  const renderExtendedBasket = basket.map((product) => {
    const { id, name, amount, price } = product;
    return (
      <BasketItem key={id} id={id} name={name} amount={amount} price={price} />
    );
  });

  return (
    <div
      ref={basketRef}
      className="basket"
      onClick={() => {
        if (basket.length > 0) {
          setExtended(true);
        }
      }}
    >
      <p className="basket__value">${value}</p>
      <div
        className={`basket__control ${
          extended ? "basket__control--active" : ""
        }`}
      >
        <img src={blackbasket} className="basket__icon" alt="basket" />
        <div className="basket__total">{basket.length}</div>
        <ul className={`extended ${extended ? "show" : ""}`}>
          {renderExtendedBasket}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    products: state.products,
  };
};

export default connect(mapStateToProps)(Basket);
