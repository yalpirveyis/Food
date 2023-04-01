import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function BorderedButton({ onPress, children, hitSlop, style }) {
  const colors = useSelector((state) => state.theme.colors);
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={hitSlop}
      style={[
        {
          borderWidth: 1,
          borderRadius: 16,
          borderColor: colors.border,
          padding: 16,
          marginTop: 16,
        },
        style,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
}
