import React from "react";
import { Outlet } from "react-router-dom";

const MovieList = () => {
  return (
    <div>
      MovieList
      <Outlet />
    </div>
  );
};

export default MovieList;
