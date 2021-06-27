import React from "react";

import "./style.scss";
const Main = ({ children, handleClick }) => {
  return (
    <button onClick={() => handleClick()} className="button">
      <div className="fill"></div>
      {children}
    </button>
  );
};

export default Main;
