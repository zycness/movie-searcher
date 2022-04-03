import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recomendacion from "./pages/Recomendacion";
import MovieList from "./pages/MovieList";
import MovieOnePage from "./pages/MovieOnePage";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./pages/ErrorPage";
import { Provider } from "react-redux";
import movieStore from "./features/movieStore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

ReactDOM.render(
  <Provider store={movieStore}>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index element={<Recomendacion />} />
        <Route path="Recomendacion/Page/:pageId" element={<Recomendacion />} />
        <Route path="/MovieList" element={<MovieList />} />
        <Route path="/MovieList/Page/:pageId" element={<MovieList />} />
        <Route path="/MovieList/:movieId" element={<MovieOnePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
