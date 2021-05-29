import React, { useState } from "react";

import "./Dropdown.scss";
import arrow from "../../assets/icons/arrow.svg";

const Dropdown = ({ content, dropped, setDropped }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", (e) => {
    setWindowWidth(e.currentTarget.innerWidth);
  });

  const listHeight = (items) => {
    if (windowWidth < 1400) {
      return items * 19;
    } else {
      return items;
    }
  };

  const renderList = content.map((item) => {
    return (
      <li
        className="dropdown__item"
        onClick={() => setDropped(item.title)}
        key={item.title}
      >
        <h4 className="dropdown__subtitle">
          {item.title}
          <img
            src={arrow}
            alt="arrow"
            className={`dropdown__arrow ${
              dropped == item.title ? "dropdown__arrow--active" : ""
            }`}
          />
        </h4>
        <ul
          className={`dropdown__sublist ${
            dropped == item.title ? "dropdown__sublist--active" : ""
          }`}
        >
          {item.types.map((subitem, idx) => {
            return (
              <li className="dropdown__subitem" key={idx}>
                {subitem}
              </li>
            );
          })}
        </ul>
      </li>
    );
  });

  return (
    <div>
      <nav className="dropdown">
        <header className="dropdown__header">
          <h3 className="dropdown__title">Teas</h3>
          <p className="dropdown__show">show all</p>
        </header>
        <ul className="dropdown__list">{renderList}</ul>
      </nav>
    </div>
  );
};

export default Dropdown;
