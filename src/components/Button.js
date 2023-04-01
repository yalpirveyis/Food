import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { changeColorMode } from "../redux/slicer/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Button() {
  const colorMode = useSelector((state) => state.theme.colorMode);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity onPress={() => dispatch(changeColorMode())}>
      <Text>Button,{colorMode}</Text>
    </TouchableOpacity>
  );
}
