import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Dropdown from "../Dropdown/Dropdown";
import Teahome from "./Teahome/Teahome";
import Products from "../Products/Products";

import { returnByList } from "../helper_functions";
import "./Teas.scss";

const Teas = ({ types, products, basket }) => {
  const [dropped, setDropped] = useState("");

  const filteredTeas = products.filter((product) => {
    let choice = dropped === "all" ? dropped : product.category;

    return dropped.toLowerCase() === choice.toLowerCase();
  });

  return (
    <section className="teas">
      <Dropdown
        dropped={dropped}
        setDropped={setDropped}
        content={returnByList(types, "tea")}
        title="Teas"
      />
      <Switch>
        <Route path="/teas/teahome" exact>
          <Teahome setDropped={setDropped} />
        </Route>
        <Route path="/teas/products" exact>
          <Products type={"tea"} products={filteredTeas} />
        </Route>
      </Switch>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    types: state.types,
  };
};

export default connect(mapStateToProps)(Teas);
