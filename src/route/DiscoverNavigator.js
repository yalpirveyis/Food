import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "../pages/Discover";

const DiscoverStack = createNativeStackNavigator();

const DiscoverNavigator = () => {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen
        name="DiscoverScreen"
        component={Discover}
        options={() => {
          return { headerShown: false };
        }}
      />
    </DiscoverStack.Navigator>
  );
};
export default DiscoverNavigator;
