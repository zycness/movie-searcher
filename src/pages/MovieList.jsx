import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../features/slices/movieSlice";
import MovieItem from "../components/MovieItem";
import styles from "../styles/movieList.module.css";
import PreviousOrNext from "../components/PreviousOrNext";
import { useParams } from "react-router-dom";
import PaginationMovies from "../components/PaginationMovies";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movies);
  const { pageId } = useParams();

  useEffect(() => {
    dispatch(fetchMovies(pageId));
  }, [dispatch, pageId]);

  return (
    <div className={styles.movieListContainer}>
      <h2 className={styles.movieListTitle}>Sección con todas las películas</h2>
      <div className={styles.movieListItems}>
        {movieList.results &&
          movieList.results.map((item) => {
            return <MovieItem key={item.id} movie={item} />;
          })}
      </div>
      {movieList.page ? (
        <PaginationMovies movie={movieList} poss="MovieList" />
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieList;
