import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { dimensions } from "../style/dimensions";
import { useSelector } from "react-redux";

export default function Stepper({ ratio }) {
  const colors = useSelector((state) => state.theme.colors);
  const stepperWidth = dimensions.windowWidth * 0.6;

  return (
    <View
      style={{
        width: stepperWidth,
        height: 10,
        backgroundColor: colors.border,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          width: (ratio >= 0 && (stepperWidth * ratio) / 100) * (100 / 6),
          maxWidth: stepperWidth,
          minWidth: 0,
          height: 10,
          backgroundColor: colors.buttonActive,
          borderRadius: 10,
        }}
      ></View>
    </View>
  );
}
