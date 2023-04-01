import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import {
  changeColorMode,
  changeTabBarVisibility,
} from "../redux/slicer/themeSlice";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        label="Aç"
        onPress={() => dispatch(changeTabBarVisibility(false))}
      />
      <Button
        label="Kapat"
        onPress={() => dispatch(changeTabBarVisibility(true))}
      />
      <Button
        label="Mod değiştir"
        onPress={() => dispatch(changeColorMode())}
      />
    </View>
  );
}
