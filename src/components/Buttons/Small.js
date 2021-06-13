import React from "react";

const Small = ({ text, click, addClass }) => {
  return (
    <button
      className={`small ${addClass}`}
      onClick={() => {
        click();
      }}
    >
      {text}
    </button>
  );
};

export default Small;
