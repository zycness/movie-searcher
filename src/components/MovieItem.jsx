import React from "react";
import styles from "../styles/movie.module.css";

const Movie = ({ movie }) => {
  // console.log(props);
  return (
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
  );
};

export default Movie;
