import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieList from "./pages/MovieList";
import Profile from "./pages/Profile";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="MovieList" element={<MovieList />}>
          <Route path=":movieId" element={<Movie />} />
        </Route>
        <Route path="Profile" element={<Profile />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
