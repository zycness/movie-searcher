import React, { useState } from "react";
import styles from "../styles/app.module.css";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <h1 className={styles.navbarLogo}>Movie Searcher</h1>
        <ul
          className={`${styles.navbar__itemContainer} ${
            show ? styles.show : ""
          }`}
        >
          <li className={styles.navbar__item}>
            <Link
              className={styles.navbar__itemLink}
              to="/"
              onClick={() => {
                setShow(false);
              }}
            >
              Recomendación
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link
              className={styles.navbar__itemLink}
              to="/MovieList"
              onClick={() => {
                setShow(false);
              }}
            >
              Películas
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <a
              href="#contacto"
              className={styles.navbar__itemLink}
              onClick={() => {
                setShow(false);
              }}
            >
              Contacto
            </a>
          </li>
        </ul>
        <IconContext.Provider
          value={{ color: "#fff", size: "3rem", className: "navbarIcon" }}
        >
          <span
            className={styles.navbarIconContainer}
            onClick={() => {
              setShow(!show);
            }}
          >
            <BiMenu />
          </span>
        </IconContext.Provider>
      </nav>
    </header>
  );
};

export default Navbar;
