import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/movie.module.css";

const Movie = ({ movie }) => {
  return (
    <Link className={styles.movieLink} to={`/MovieList/${movie.id}`}>
      <div className={styles.movieContainer}>
        <img
          className={styles.moviePoster}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <ul className={styles.movieInfoContainer}>
          <li className={styles.movieTitle}>{movie.title}</li>
          <li className={styles.movieRating}>Rating: {movie.vote_average}⭐</li>
          <li className={styles.movieItem}></li>
        </ul>
      </div>
    </Link>
  );
};

export default Movie;
