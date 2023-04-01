import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./TabNavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer tabBarOptions={{ keyboardHidesTabBar: true }}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
