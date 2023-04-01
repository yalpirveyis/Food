import { Dimensions, Platform } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const dimensions = {
  androidStatusBar: Platform.OS === "ios" ? 0 : 24,
  iosStatusBar: Platform.OS === "ios" ? 48 : 0,
  windowWidth,
  windowHeight,
};
