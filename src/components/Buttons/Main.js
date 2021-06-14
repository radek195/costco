import React from "react";

import "./style.scss";
const Main = ({ text }) => {
  return (
    <button className="button">
      <div className="fill"></div>
      {text}
    </button>
  );
};

export default Main;
