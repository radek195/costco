import React from "react";

import { Link } from "react-router-dom";

import Basket from "./Basket";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__logo">
          <Link to="/">Costco</Link>
        </h1>
        <Basket />
        <ul className="header__list">
          <li className="header__item">
            <Link to="/teas/teahome">Teas</Link>
          </li>
          <li className="header__item">
            <Link to="/coffees/coffeehome">Coffees</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
