import { configureStore } from "@reduxjs/toolkit";
import themeReduce from "./slicer/themeSlice";

export const store = configureStore({
  reducer: { theme: themeReduce },
});
