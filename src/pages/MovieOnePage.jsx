import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/MovieOnePage.module.css";
import { getOneMovieFetch } from "../features/slices/movieSlice";

const MovieOnePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { singleMovie } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getOneMovieFetch(movieId));
  }, [dispatch]);
  return (
    <div className={styles.oneMovieContainer}>
      <div className={styles.movieContainer}>
        <img
          className={styles.movieImg}
          src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
          alt={singleMovie.title}
        />
        <div className={styles.movieTextContainer}>
          <p className={`${styles.movieTextInfo} ${styles.movieTextTitle}`}>
            {singleMovie.title}
          </p>
          <p className={`${styles.movieTextInfo} ${styles.movieTextRating}`}>
            <span>Rating:</span> {singleMovie.vote_average}⭐
          </p>
          <p className={`${styles.movieTextInfo} ${styles.movieTextDate}`}>
            <span>Fecha de salida:</span> {singleMovie.release_date}
          </p>
          <p className={`${styles.movieTextInfo} ${styles.movieTextDesc}`}>
            <span>Descripción:</span> {singleMovie.overview}
          </p>
          <p className={`${styles.movieTextInfo} ${styles.movieTextAtp}`}>
            <span>¿Es apto para todo público?</span>{" "}
            {singleMovie.adult ? "No" : "Sí"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieOnePage;
