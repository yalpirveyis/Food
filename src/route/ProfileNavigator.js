import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../pages/Profile";

const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={() => {
          return { headerShown: false };
        }}
      />
    </ProfileStack.Navigator>
  );
};
export default ProfileNavigator;
