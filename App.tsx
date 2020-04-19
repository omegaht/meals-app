import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "@use-expo/font";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

import { AppNavigator } from "./navigation/MealsNavigator";
import store from "./store";

export default function App() {
  const [isLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </View>
  );
}
