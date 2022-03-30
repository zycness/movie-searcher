import React from "react";
import { Provider } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import movieStore from "./features/movieStore";
import Footer from "./components/Footer";
import styles from "../src/styles/app.module.css";

const App = () => {
  return (
    <Provider store={movieStore}>
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
    </Provider>
  );
};

export default App;
