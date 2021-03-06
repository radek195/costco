import React from "react";
import { Link } from "react-router-dom";

import "./Dropdown.scss";
import arrow from "../../assets/icons/arrow.svg";
import { isTea } from "../helper_functions";

const returnHeight = (rows) => {
  if (window.innerWidth < 1001) {
    return rows * 16 + 15;
  }
  return rows * 19 + 19;
};

const Dropdown = ({ content, dropped, setDropped, title }) => {
  const renderList = content.map((item) => {
    return (
      <Link
        to={
          isTea(content) ? "/costco/teas/products" : "/costco/coffees/products"
        }
        key={item.title}
      >
        <li className="dropdown__item" onClick={() => setDropped(item.title)}>
          <h5 className="dropdown__subtitle">
            {item.title}
            <img
              src={arrow}
              alt="arrow"
              className={`dropdown__arrow ${
                dropped === item.title ? "dropdown__arrow--active" : ""
              }`}
            />
          </h5>
          <ul
            className="dropdown__sublist"
            style={{
              height: `${
                dropped === item.title
                  ? returnHeight(item.types.length) + "px"
                  : ""
              }`,
            }}
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
      </Link>
    );
  });

  return (
    <div>
      <nav className="dropdown">
        <header className="dropdown__header">
          <h3 className="dropdown__title">{title}</h3>
          <Link
            to={
              content[0].title === "Classic"
                ? "/costco/teas/products"
                : "/costco/coffees/products"
            }
          >
            <p className="dropdown__show" onClick={() => setDropped("all")}>
              show all
            </p>
          </Link>
        </header>
        <ul className="dropdown__list">{renderList}</ul>
      </nav>
    </div>
  );
};

export default Dropdown;
