import React from "react";

import "./style.scss";
const Main = ({ text, click }) => {
  return (
    <button
      className="button"
      onClick={() => {
        click();
      }}
    >
      <div className="fill"></div>
      {text}
    </button>
  );
};

export default Main;
