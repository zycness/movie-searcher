import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.footerTitle}>
        This was made by{" "}
        <a href="https://www.linkedin.com/in/kevinnahuelf/" target="_blank">
          kevinnahuelf
        </a>
      </span>
    </div>
  );
};

export default Footer;
