import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Products from "../Products/Products";
import Coffeehome from "./Coffeehome/Coffeehome";
import Dropdown from "../Dropdown/Dropdown";

import { returnByList } from "../helper_functions";
import "./Coffees.scss";

const Coffees = ({ types, products }) => {
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
          content={returnByList(types, "coffee")}
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
    types: state.types,
  };
};

export default connect(mapStateToProps, null)(Coffees);
