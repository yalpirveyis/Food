import { createSlice } from "@reduxjs/toolkit";
import { Dark, Light } from "../../style/color";

const initialState = {
  colorMode: "dark",
  colors: Dark,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeColorMode: (state) => {
      state.colorMode = state.colorMode == "dark" ? "light" : "dark";
      state.colors = state.colorMode == "dark" ? Dark : Light;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeColorMode } = themeSlice.actions;

export default themeSlice.reducer;
