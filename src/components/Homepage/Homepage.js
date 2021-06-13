import React from "react";

import { Link } from "react-router-dom";

import Button from "../Buttons/Main.js";
import "./Homepage.scss";
import coffee from "../../assets/home-img.svg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__content">
        <h2 className="homepage__title">
          We make peoples mornings <br /> BETTER
        </h2>
        <p className="homepage__subtitle">Check out our offer:</p>
        <div className="homepage__buttons">
          <Link to="/teas/teahome">
            <Button
              text={"teas"}
              click={() => {
                console.log("hello!");
              }}
            />
          </Link>
          <Link to="/coffees/coffeehome">
            <Button
              text={"coffees"}
              click={() => {
                console.log("hello!");
              }}
            />
          </Link>
        </div>
      </div>
      <img className="homepage__img" src={coffee} alt="coffee mug" />
    </div>
  );
};

export default Homepage;
