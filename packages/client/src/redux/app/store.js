import { configureStore } from "@reduxjs/toolkit";
import generalSliceReducer from "../slices/generalSlice";
import authorsSliceReducer from "../slices/authorsSlice";
import blogsSliceReducer from "../slices/blogsSlice";

export const store = configureStore({
  reducer: {
    general: generalSliceReducer,
    authors: authorsSliceReducer,
    blogs: blogsSliceReducer,
  },
});
