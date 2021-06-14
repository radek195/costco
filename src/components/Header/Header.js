import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Basket from "./Basket";
import "./Header.scss";

const Header = ({ activeTab }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__logo">
          <Link to="/">Costco</Link>
        </h1>
        <Basket />
        <ul className="header__list">
          <li className="header__item">
            <div
              className={`indicator ${
                activeTab === "teas" ? "indicator--active" : ""
              }`}
            ></div>
            <Link to="/teas/teahome">Teas</Link>
          </li>
          <li className="header__item">
            <div
              className={`indicator ${
                activeTab === "coffees" ? "indicator--active" : ""
              }`}
            ></div>
            <Link to="/coffees/coffeehome">Coffees</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
