import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "../components/sampler/samplerSlice";

export default configureStore({
  reducer: {
    sampler: sampleReducer,
  },
});