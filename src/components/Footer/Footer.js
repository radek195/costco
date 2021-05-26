import React from "react";

import "./Footer.scss";
import fb from "../../assets/icons/fb.svg";
import ig from "../../assets/icons/ig.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__half">
        <p className="footer__subtitle">Contact:</p>
        <p className="footer__paragraph">costcoshop@dummy.pl</p>
        <p className="footer__paragraph">+12 312 312 312</p>
      </div>
      <div className="footer__half">
        <p className="footer__subtitle">Follow us on:</p>
        <div className="footer__icons">
          <img className="footer__icon" src={fb} alt="facebook" />
          <img className="footer__icon" src={ig} alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
