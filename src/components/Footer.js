import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="foot-container">
      <div className="footer">
        <p>
          &copy; {new Date().getFullYear()} | Worship Grid Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
