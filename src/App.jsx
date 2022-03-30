import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import styles from "../src/styles/app.module.css";

const App = () => {
  return (
    <div>
      <header className={styles.navbarContainer}>
        <nav className={styles.navbar}>
          <h1 className={styles.navbarLogo}>Movie Searcher</h1>
          <ul className={styles.navbar__itemContainer}>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__itemLink} to="/">
                Home
              </Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__itemLink} to="/MovieList">
                Películas
              </Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__itemLink} to="/Profile">
                Perfil
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
