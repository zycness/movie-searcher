import React from "react";
import styles from "../styles/footer.module.css";
import { FaLinkedin, FaWhatsappSquare, FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer} id="contacto">
        <span className={styles.footerTitle}>
          This was made by{" "}
          <a href="https://www.linkedin.com/in/kevinnahuelf/" target="_blank">
            kevinnahuelf
          </a>
        </span>
      </div>
      <IconContext.Provider
        value={{
          size: "3rem",
          color: "#5daace",
          className: "footerContactsIcon",
        }}
      >
        <div className={styles.footerContacts}>
          <ul className={styles.footerContactsList}>
            <li>
              <a
                href="https://www.linkedin.com/in/kevinnahuelf/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/541138084961"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Codelearner13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Footer;
