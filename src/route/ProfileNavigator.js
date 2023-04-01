import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};
const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
const HomeStack = createNativeStackNavigator();

const ProfileNavigator = () => {
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
export default ProfileNavigator;
