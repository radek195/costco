import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import TeasDropdown from "./TeasDropdown/TeasDropdown";
import Teahome from "./Teahome/Teahome";
import TeaProducts from "./TeaProducts/TeaProducts";
import "./Teas.scss";

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

const products = [
  {
    title: "Assam Gold",
    type: "Black",
    quantity: 80,
    price: 9.99,
    category: "classic",
  },
  {
    title: "Bollywood Chai",
    type: "Black",
    quantity: 80,
    price: 6.99,
    category: "classic",
  },
  {
    title: "Chinese Sencha",
    type: "Green",
    quantity: 80,
    price: 12.99,
    category: "classic",
  },
  {
    title: "Bai Mu Dan",
    type: "White",
    quantity: 60,
    price: 14.99,
    category: "classic",
  },
  {
    title: "Divine Elixir",
    type: "White",
    quantity: 20,
    price: 11.99,
    category: "classic",
  },
  {
    title: "Spiced Pie",
    type: "Pu-erh",
    quantity: 120,
    price: 3.99,
    category: "classic",
  },
  {
    title: "Earl Grey",
    type: "Black",
    quantity: 60,
    price: 4.99,
    category: "flavoured",
  },
  {
    title: "Jasmine",
    type: "Green",
    quantity: 20,
    price: 19.99,
    category: "flavoured",
  },
  {
    title: "Masala",
    type: "Black",
    quantity: 120,
    price: 12.99,
    category: "flavoured",
  },
  {
    title: "Yerba Mate",
    type: "Black",
    quantity: 300,
    price: 3.99,
    category: "infusions",
  },
];

const Teas = () => {
  const [dropped, setDropped] = useState("");

  const filteredTeas = products.filter((product) => {
    let choice = dropped === "all" ? dropped : product.category;

    return dropped.toLowerCase() === choice.toLowerCase();
  });

  return (
    <section className="teas">
      <TeasDropdown dropped={dropped} setDropped={setDropped} content={teas} />
      <Switch>
        <Route path="/teas/teahome" exact>
          <Teahome setDropped={setDropped} />
        </Route>
        <Route path="/teas/products" exact>
          <TeaProducts products={filteredTeas} />
        </Route>
      </Switch>
    </section>
  );
};

export default Teas;
