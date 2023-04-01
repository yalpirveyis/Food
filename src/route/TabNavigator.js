import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./components/CustomTabBar";
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar key={"TabBar"} {...props} />}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Discover" component={HomeNavigator} />
      <Tab.Screen name="Add" component={ProfileNavigator} />
      <Tab.Screen name="Recipe" component={ProfileNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
