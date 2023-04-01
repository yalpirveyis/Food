import { createSlice } from "@reduxjs/toolkit";
import { Dark, Light } from "../../style/color";

const initialState = {
  colorMode: "dark",
  colors: Dark,
  tabBarVisibility: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeColorMode: (state) => {
      state.colorMode = state.colorMode == "dark" ? "light" : "dark";
      state.colors = state.colorMode == "dark" ? Dark : Light;
    },
    changeTabBarVisibility: (state, action) => {
      state.tabBarVisibility = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeColorMode, changeTabBarVisibility } = themeSlice.actions;

export default themeSlice.reducer;
