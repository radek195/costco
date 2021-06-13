import React, { useState, useEffect } from "react";

import Small from "../../Buttons/Small";
import TeaCard from "./TeaCard";

import { priceSort } from "../../helper_functions";
import "./TeaProducts.scss";

const TeaProducts = ({ products }) => {
  const [toRender, setToRender] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setToRender(products);
    setFilter("");
  }, [products]);

  const sortPrices = () => {
    const filtered = priceSort(toRender);
    setFilter("price");
    setToRender(priceSort(filtered));
  };

  const mapTeas = toRender.map((tea) => {
    return <TeaCard tea={tea} key={tea.title} />;
  });

  return (
    <div className="teaprod">
      <div className="teaprod__header">
        <p className="teaprod__title">Sort by:</p>
        <Small
          text="price"
          click={() => sortPrices()}
          addClass={filter === "price" ? "small--active" : ""}
        />
      </div>
      <div className="teaprod__teas">{mapTeas}</div>
    </div>
  );
};

export default TeaProducts;
