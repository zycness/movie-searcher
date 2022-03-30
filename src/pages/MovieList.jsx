import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../features/slices/movieSlice";
import MovieItem from "../components/MovieItem";
import styles from "../styles/movieList.module.css";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className={styles.movieListContainer}>
      <h2 className={styles.movieListTitle}>Sección de películas</h2>
      <div className={styles.movieListItems}>
        {movieList.results &&
          movieList.results.map((item) => {
            return <MovieItem key={item.id} movie={item} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
