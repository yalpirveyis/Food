import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./slicer/configSlice";

export const store = configureStore({
  reducer: { config: configReducer },
});
