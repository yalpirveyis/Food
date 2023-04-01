import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { dimensions } from "../style/dimensions";
import { StatusBar } from "expo-status-bar";
import Button from "./Button";
export default function Container({ children }) {
  const colorMode = useSelector((state) => state.theme.colorMode);
  const colors = useSelector((state) => state.theme.colors);

  return (
    <View
      style={{
        marginTop: dimensions.statusbar,
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      <StatusBar
        style={colorMode == "dark" ? "light" : "dark"}
        backgroundColor={colors.background}
      />
      {children}
      <Text style={{ color: colors.text }}>text</Text>
      <Button />
    </View>
  );
}
