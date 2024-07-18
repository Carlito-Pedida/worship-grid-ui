import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="d-flex-wrap justify-content-center align-items-center">
        <p>
          &copy; {new Date().getFullYear()} | Worship Grid Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
