import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Register from "../pages/RegisterSteps";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="RegisterScreen"
        component={Register}
        options={() => {
          return { headerShown: false };
        }}
      />
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={() => {
          return { headerShown: false };
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
