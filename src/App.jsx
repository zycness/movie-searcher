import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/MovieList">Lista</Link>
            </li>
            <li>
              <Link to="/Profile">Perfil</Link>
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
