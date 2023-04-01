import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function BackButton() {
  const colors = useSelector((state) => state.theme.colors);

  return (
    <TouchableOpacity hitSlop={{ left: 8, right: 8 }}>
      <Image
        style={{ width: 16, height: 16, tintColor: colors.text }}
        source={require("../assets/Icons/Back.png")}
      />
    </TouchableOpacity>
  );
}
