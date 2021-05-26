import React from "react";

import "./Button.scss";
const Button = ({ text, click }) => {
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

export default Button;
