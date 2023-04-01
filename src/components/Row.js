import { View, Text } from "react-native";
import React from "react";

export default function Row({ children }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
}
