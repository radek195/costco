import React, { useEffect } from "react";

import black from "../../../assets/black.svg";
import green from "../../../assets/green.svg";
import white from "../../../assets/white.svg";
import puerh from "../../../assets/puerh.svg";

import "./Teahome.scss";

const teaInfo = [
  {
    title: "Black",
    description:
      "The most common type of tea accounting for up to 85% of total tea consumption in the western world. Black tea is fully oxidized and has a darker appearance, stronger flavour, and higher caffeine content compared to other teas.",
    image: black,
  },
  {
    title: "White",
    description:
      "Is the least processed of all teas. Only the unopened buds and young leaves covered in silver fuzz are used, and they are merely withered and dried. White tea produces a very light-colored infusion with a mild flavour.",
    image: white,
  },
  {
    title: "Green",
    description:
      "Is 'unoxidized' tea. The leaves are heated soon after picking in order to destroy the enzymes that cause oxidation. This type of processing preserves a high level of antioxidants, vitamins, and minerals.",
    image: green,
  },
  {
    title: "Pu-erh",
    description:
      "Special type of tea that comes from the Yunan province of China and is known for its earthy flavour. It is made out of tea plucked from wild tea trees rather than cultivated bushes and the leaves go through microbial fermentation",
    image: puerh,
  },
];
const Teahome = ({ setDropped }) => {
  useEffect(() => {
    setDropped("");
  }, [setDropped]);
  const renderTeaInfo = teaInfo.map((tea) => {
    return (
      <div className="teahome__tea" key={tea.title}>
        <img src={tea.image} alt={tea.title} className="teahome__image" />
        <h4 className="teahome__title">{tea.title}</h4>
        <p className="teahome__description">{tea.description}</p>
      </div>
    );
  });

  return (
    <div className="teahome">
      <h3 className="teahome__header">
        TEA<span className="fw-light">CATEGORIES</span>
      </h3>
      <div className="teahome__info">{renderTeaInfo}</div>
    </div>
  );
};

export default Teahome;
