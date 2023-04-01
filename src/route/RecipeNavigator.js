import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Recipe from "../pages/Recipe";

const RecipeStack = createNativeStackNavigator();

const RecipeNavigator = () => {
  return (
    <RecipeStack.Navigator>
      <RecipeStack.Screen
        name="RecipeScreen"
        component={Recipe}
        options={() => {
          return { headerShown: false };
        }}
      />
    </RecipeStack.Navigator>
  );
};
export default RecipeNavigator;
