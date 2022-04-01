import React, { useEffect } from "react";
import styles from "../styles/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getWeekPopularMovies } from "../features/slices/movieSlice";
import MovieItem from "../components/MovieItem";
import { useParams } from "react-router-dom";
import PreviousOrNext from "../components/PreviousOrNext";
import PaginationMovies from "../components/PaginationMovies";

const Home = () => {
  const dispatch = useDispatch();
  const { weeklyMovies } = useSelector((state) => state.movies);
  const { pageId } = useParams();

  useEffect(() => {
    dispatch(getWeekPopularMovies(pageId));
  }, [dispatch, pageId]);
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.homeTitle}>Peliculas populares de esta semana</h2>
      <div className={styles.moviesWeeklyContainer}>
        {weeklyMovies.results
          ? weeklyMovies.results.map((item) => {
              return <MovieItem key={item.id} movie={item} />;
            })
          : "error"}
      </div>
      {weeklyMovies.page ? (
        <PaginationMovies movie={weeklyMovies} poss="Recomendacion" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
