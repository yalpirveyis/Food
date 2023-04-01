import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button />
    </View>
  );
};
const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};
const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={() => {
          return { headerShown: false };
        }}
      />

      <HomeStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => {
          return { headerShown: false };
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
