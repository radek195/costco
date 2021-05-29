import React, { useState } from "react";

import Dropdown from "../Dropdown/Dropdown";
import Products from "../Products/Products";

import "./Teahome.scss";

const teas = [
  {
    title: "Classic",
    types: [
      "Assam Gold - Black",
      "Bollywood Chai - Black",
      "Chineese Sencha - Green",
      "Bai Mu Dan - White",
      "Divine Elixir - White",
      "Spiced Pie - Pu-erh",
    ],
  },
  {
    title: "Flavoured",
    types: ["Earl Grey - Black", "Jasmine - Green", "Masala - Black"],
  },
  {
    title: "Infusions",
    types: ["Yerba Mate"],
  },
];

const Teahome = () => {
  const [dropped, setDropped] = useState();

  return (
    <section className="teahome">
      <Dropdown dropped={dropped} setDropped={setDropped} content={teas} />
      <Products />
    </section>
  );
};

export default Teahome;
