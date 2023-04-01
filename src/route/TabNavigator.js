import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddNavigator from "./AddNavigator";
import CustomTabBar from "./components/CustomTabBar";
import DiscoverNavigator from "./DiscoverNavigator";
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";
import RecipeNavigator from "./RecipeNavigator";

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
      <Tab.Screen name="Discover" component={DiscoverNavigator} />
      <Tab.Screen name="Add" component={AddNavigator} />
      <Tab.Screen name="Recipe" component={RecipeNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
