import { Platform } from "react-native";

export const dimensions = {
  statusbar: Platform.OS === "ios" ? 0 : 24,
};
