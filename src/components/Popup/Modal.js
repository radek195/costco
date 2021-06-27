import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

import Small from "../Buttons/Small";

let defaultForm = {
  name: "",
  email: "",
  city: "",
  street: "",
};

const Modal = ({ isOpen, close, value }) => {
  const [formValues, setFormValues] = useState(defaultForm);
  const ref = useRef(null);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={ref}
      className="modal"
      onClick={(e) => {
        if (e.target === ref.current) {
          close();
        }
      }}
    >
      <div className="modal__content">
        <div className="modal__close" onClick={() => close()}>
          +
        </div>
        <form
          className="modal__form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formValues);
            alert(
              "Hope you are enjoying this page. It is for educational purposes only. Nothing can be bought here. Form values are printed in the console >"
            );
            close();
          }}
        >
          <div className="modal__input">
            <label className="modal__label fw-bold">Name:</label>
            <input
              onChange={(e) => {
                setFormValues({ ...formValues, name: e.target.value });
              }}
              className="modal__text fw-light"
              type="text"
              placeholder="Enter last name"
            />
          </div>
          <div className="modal__input">
            <label className="modal__label fw-bold">Email:</label>
            <input
              onChange={(e) => {
                setFormValues({ ...formValues, email: e.target.value });
              }}
              className="modal__text fw-light"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="modal__input">
            <label className="modal__label fw-bold">City:</label>
            <input
              onChange={(e) => {
                setFormValues({ ...formValues, city: e.target.value });
              }}
              className="modal__text fw-light"
              type="text"
              placeholder="City"
            />
          </div>
          <div className="modal__input">
            <label className="modal__label fw-bold">Street:</label>
            <input
              onChange={(e) => {
                setFormValues({ ...formValues, street: e.target.value });
              }}
              className="modal__text fw-light"
              type="text"
              placeholder="City"
            />
          </div>
          <Small text={`pay $${value}`} addClass={"modal__btn"} />
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
