import React, { useState } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from "./Header/Header";
import Homepage from "./Homepage/Homepage";
import Teas from "./Teas/Teas";
import Coffees from "./Coffees/Coffees";

import Footer from "./Footer/Footer";

import "./scss/App.scss";

const App = () => {
  const [activeTab, setActiveTab] = useState();

  window.addEventListener("click", () => {
    if (window.location.href.includes("teas")) {
      setActiveTab("teas");
      return;
    } else if (window.location.href.includes("coffees")) {
      setActiveTab("coffees");
      return;
    }
    setActiveTab("none");
  });

  return (
    <div className="app">
      <Router>
        <Header activeTab={activeTab} />
        <Switch>
          <Route path="/costco" exact>
            <Homepage />
          </Route>
          <Route path="/costco/teas">
            <Teas />
          </Route>
          <Route path="/costco/coffees">
            <Coffees />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
