import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: [],
  },
  reducers: {
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { setMovieList } = movieSlice.actions;

export default movieSlice.reducer;

export const fetchMovies = () => (dispatch) => {
  let apiKey = "268d8fecf9d1012809ac3686dbfce298";
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch(setMovieList(data));
    })
    .catch((err) => {
      console.log(err);
    });
};
