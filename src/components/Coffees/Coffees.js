import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Products from "../Products/Products";
import Coffeehome from "./Coffeehome/Coffeehome";
import Dropdown from "../Dropdown/Dropdown";

import "./Coffees.scss";

const coffees = [
  {
    title: "Arabica",
    types: [
      "Blue mountain - Japan",
      "Medellin excelso - Colombia",
      "Arabica santos - Brasil",
      "Arabica mokka - Ethiopia",
      "Arabica tokke - Nicaragua",
    ],
  },
  {
    title: "Robusta",
    types: [
      "Robusta santos - Brasil",
      "Robusta koffa- Cameroon",
      "Robusta losano - Kenya",
    ],
  },
  {
    title: "Mix",
    types: ["Robusta 30% Arabica 70%", "Robusta 20% Arabica 80%"],
  },
];

const products = [
  {
    productId: 1,
    title: "Mountain",
    type: "Japan",
    quantity: 120,
    price: 1.99,
    category: "Arabica",
  },
  {
    productId: 2,
    title: "Excelso",
    type: "Colombia",
    quantity: 160,
    price: 9.99,
    category: "Arabica",
  },
  {
    productId: 3,
    title: "Santos",
    type: "Brasil",
    quantity: 280,
    price: 12.99,
    category: "Arabica",
  },
  {
    productId: 4,
    title: "Mokka",
    type: "Ethiopia",
    quantity: 300,
    price: 12.99,
    category: "Arabica",
  },
  {
    productId: 5,
    title: "Tokke",
    type: "Nicaragua",
    quantity: 200,
    price: 2.99,
    category: "Arabica",
  },
  {
    productId: 6,
    title: "Santos",
    type: "Brasil",
    quantity: 820,
    price: 32.99,
    category: "Robusta",
  },
  {
    productId: 7,
    title: "Koffa",
    type: "Cameroon",
    quantity: 800,
    price: 12.99,
    category: "Robusta",
  },
  {
    productId: 8,
    title: "Losano",
    type: "Kenya",
    quantity: 100,
    price: 9.99,
    category: "Robusta",
  },
  {
    productId: 9,
    title: "30% 70%",
    type: "Robusta Arabica",
    quantity: 520,
    price: 18.99,
    category: "Mix",
  },
  {
    productId: 10,
    title: "20% 80%",
    type: "Robusta Arabica",
    quantity: 100,
    price: 10.99,
    category: "Mix",
  },
];

const Coffees = () => {
  const [dropped, setDropped] = useState("");

  const filteredCoffees = products.filter((product) => {
    let choice = dropped === "all" ? dropped : product.category;

    return dropped.toLowerCase() === choice.toLowerCase();
  });
  return (
    <div>
      <section className="coffees">
        <Dropdown
          dropped={dropped}
          setDropped={setDropped}
          content={coffees}
          title="Coffees"
        />
        <Switch>
          <Route path="/coffees/coffeehome" exact>
            <Coffeehome setDropped={setDropped} />
          </Route>
          <Route path="/coffees/products" exact>
            <Products type={"coffee"} products={filteredCoffees} />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default Coffees;
