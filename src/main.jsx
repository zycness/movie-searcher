import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Recomendacion from "./pages/Recomendacion";
import MovieList from "./pages/MovieList";
import MovieOnePage from "./pages/MovieOnePage";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./pages/ErrorPage";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Recomendacion />} />
        <Route path="MovieList" element={<MovieList />} />
        <Route path="MovieList/:movieId" element={<MovieOnePage />} />
        <Route path="MovieList/Page/:pageId" element={<MovieList />} />
        <Route path="Recomendacion/Page/:pageId" element={<Recomendacion />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
