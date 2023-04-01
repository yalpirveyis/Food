import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Add from "../pages/Add";

const AddStack = createNativeStackNavigator();

const AddNavigator = () => {
  return (
    <AddStack.Navigator>
      <AddStack.Screen
        name="AddScreen"
        component={Add}
        options={() => {
          return { headerShown: false };
        }}
      />
    </AddStack.Navigator>
  );
};
export default AddNavigator;
