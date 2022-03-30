import { configureStore } from "@reduxjs/toolkit";
import movies from "./slices/movieSlice.js";
export default configureStore({
  reducer: { movies },
});
