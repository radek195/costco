import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from "./Header/Header";
import Homepage from "./Homepage/Homepage";
import Teahome from "./Teahome/Teahome";
import Footer from "./Footer/Footer";

import "./scss/App.scss";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" exact>
            <Homepage />
          </Route>
          <Route path="/teahome" exact>
            <Teahome />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
