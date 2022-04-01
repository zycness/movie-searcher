import React, { useState, useEffect } from "react";
import { Pagination } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const PaginationMovies = ({ movie, poss }) => {
  console.log(movie);
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${poss}/Page/${activePage}`);
  }, [activePage]);

  return (
    <Pagination
      page={activePage}
      onChange={setActivePage}
      total={movie.total_pages}
      siblings={3}
      radius="xs"
    />
  );
};

export default PaginationMovies;
