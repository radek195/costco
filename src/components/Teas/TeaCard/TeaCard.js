import React from "react";

import whiteBasket from "../../../assets/icons/white-basket.svg";
import black from "../../../assets/black.png";
import green from "../../../assets/green.png";
import white from "../../../assets/white.png";
import puerh from "../../../assets/puerh.png";

import "./TeaCard.scss";

const TeaCard = ({ tea }) => {
  const image = (type) => {
    if (type === "Green") return green;
    if (type === "Black") return black;
    if (type === "White") return white;
    if (type === "Pu-erh") return puerh;
  };

  return (
    <div className="teacard">
      <div className="add-basket">
        <img
          src={whiteBasket}
          alt="white basket"
          className="add-basket__icon"
        />
      </div>
      <img
        className="teacard__image"
        src={image(tea.type)}
        alt={`${tea.type} tea`}
      />
      <h3 className="teacard__title">{tea.title}</h3>
      <p className="teacard__field">
        <span className="fw-light">type:</span> {tea.type}
      </p>
      <p className="teacard__field">
        <span className="fw-light">quantity:</span> {tea.quantity}g
      </p>
      <p className="teacard__field teacard__price">
        <span className="fw-light">price:</span> ${tea.price}
      </p>
    </div>
  );
};

export default TeaCard;
