import { createSlice } from "@reduxjs/toolkit";
import { Dark, Light } from "../../style/color";

const initialState = {
  colorMode: "dark",
  colors: Dark,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeColorMode: (state) => {
      state.colorMode = state.colorMode == "dark" ? "light" : "dark";
      state.colors = state.colorMode == "dark" ? Dark : Light;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeColorMode } = configSlice.actions;

export default configSlice.reducer;
