import React, { useEffect } from "react";

import arabicaSvg from "../../../assets/arabica bean.svg";
import robustaSvg from "../../../assets/robusta bean.svg";
import photo from "../../../assets/coffee.png";

import "./Coffeehome.scss";

const coffeeInfo = [
  {
    title: "Arabica",
    description:
      "Arabica beans have a sweeter, more complex flavor that you can drink straight. Funny thing is, even though it’s the most popular, it doesn’t have as much caffeine as Robusta.",
    image: arabicaSvg,
  },
  {
    title: "Robusta",
    description:
      "Robusta is cheaper and stronger. Because of its bitter flavor, you’ll typically see Robusta used for espresso drinks and in instant coffee mixes.",
    image: robustaSvg,
  },
];

const Coffeehome = ({ setDropped }) => {
  useEffect(() => {
    setDropped("");
  }, [setDropped]);

  const renderCoffeeInfo = coffeeInfo.map((coffee) => {
    return (
      <div className="coffeehome__tea" key={coffee.title}>
        <img
          src={coffee.image}
          alt={coffee.title}
          className="coffeehome__image"
        />
        <h4 className="coffeehome__title">{coffee.title}</h4>
        <p className="coffeehome__description">{coffee.description}</p>
      </div>
    );
  });

  return (
    <div className="coffeehome">
      <h3 className="coffeehome__header">
        COFFEE<span className="fw-light">BEANS</span>
      </h3>
      <div>
        <div className="coffeehome__info">{renderCoffeeInfo}</div>
        <img
          src={photo}
          alt="grinded and non drinded beans"
          className="coffeehome__photo"
        />
      </div>
    </div>
  );
};

export default Coffeehome;
