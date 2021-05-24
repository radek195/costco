import React from "react";

import { Link, BrowserRouter as Router } from "react-router-dom";

import Basket from "./Basket";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Router>
          <h1 className="header__logo">
            <Link to="/">Costco</Link>
          </h1>
          <Basket />
          <ul className="header__list">
            <li className="header__item">
              <Link to="/teas">Teas</Link>
            </li>
            <li className="header__item">
              <Link to="/coffees">Coffees</Link>
            </li>
          </ul>
        </Router>
      </nav>
    </header>
  );
};

export default Header;
