import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { dimensions } from "./src/style/dimensions";

export default function App() {
  return (
    <View style={{ marginTop: dimensions.statusbar }}>
      <Text>Food Recipe App!</Text>
      <StatusBar style="light" backgroundColor="red" />
    </View>
  );
}
