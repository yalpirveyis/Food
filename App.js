import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import AppNavigator from "./src/route";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./src/assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./src/assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("./src/assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./src/assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./src/assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./src/assets/fonts/Inter-Thin.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
