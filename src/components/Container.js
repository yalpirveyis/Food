import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { dimensions } from "../style/dimensions";
import { StatusBar } from "expo-status-bar";
export default function Container({ children }) {
  const colorMode = useSelector((state) => state.theme.colorMode);
  const colors = useSelector((state) => state.theme.colors);

  return (
    <ScrollView
      style={{
        marginTop: dimensions.androidStatusBar,
        paddingTop: dimensions.iosStatusBar,
        backgroundColor: colors.background,
        flex: 1,
        padding: 16,
      }}
    >
      <StatusBar
        style={colorMode == "dark" ? "light" : "dark"}
        backgroundColor={Platform.OS === "android" && colors.background}
      />
      {children}
    </ScrollView>
  );
}
