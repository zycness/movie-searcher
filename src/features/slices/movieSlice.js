import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: [],
    singleMovie: [],
    weeklyMovies: [],
  },
  reducers: {
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    getMovieId: (state, action) => {
      state.singleMovie = action.payload;
    },
    setWeekPopularMovies: (state, action) => {
      state.weeklyMovies = action.payload;
    },
  },
});

export const { setMovieList, getMovieId, setWeekPopularMovies } =
  movieSlice.actions;

export default movieSlice.reducer;

export const fetchMovies =
  (page = 1) =>
  (dispatch) => {
    let apiKey = "268d8fecf9d1012809ac3686dbfce298";
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setMovieList(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getOneMovieFetch = (id) => (dispatch) => {
  let apiKey = "268d8fecf9d1012809ac3686dbfce298";
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch(getMovieId(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getWeekPopularMovies =
  (page = 1) =>
  (dispatch) => {
    let apiKey = "268d8fecf9d1012809ac3686dbfce298";
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=es&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setWeekPopularMovies(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
