import React, { useState, useEffect } from "react";

import Small from "../Buttons/Small";
import TeaCard from "../Teas/TeaCard/TeaCard";
import CoffeeCard from "../Coffees/CoffeeCard/CoffeeCard";

import { priceSort, returnByList } from "../helper_functions";
import "./Products.scss";

const Products = ({ type, products }) => {
  const [toRender, setToRender] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const filteredProducts = returnByList(products, type);
    setToRender(filteredProducts);
    setFilter("");
  }, [products]);

  const sortPrices = () => {
    const filtered = priceSort(toRender);
    setFilter("price");
    setToRender(priceSort(filtered));
  };

  const mapProducts = toRender.map((product) => {
    if (type === "tea") {
      return <TeaCard tea={product} key={product.productId} />;
    }
    return <CoffeeCard coffee={product} key={product.productId} />;
  });

  return (
    <div className="product">
      <div className="product__header">
        <p className="product__title">Sort by:</p>
        <Small
          text="price"
          click={() => sortPrices()}
          addClass={filter === "price" ? "small--active" : ""}
        />
      </div>
      <div className="product__teas">{mapProducts}</div>
    </div>
  );
};

export default Products;
