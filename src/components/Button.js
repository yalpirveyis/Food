import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Button({ onPress, label, hitSlop }) {
  const colors = useSelector((state) => state.theme.colors);
  return (
    <TouchableOpacity onPress={onPress} hitSlop={hitSlop}>
      <Text style={{ color: colors.text }}>{label}</Text>
    </TouchableOpacity>
  );
}
