import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import AppNavigator from "./src/route";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
