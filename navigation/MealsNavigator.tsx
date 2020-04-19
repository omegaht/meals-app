import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import CategoryMealScreen from "../screens/CategoryMealScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { CATEGORY_MEALS, CATEGORIES, MEAL_DETAILS } from "./constants";
import FavoriteScreen from "../screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";

const MealStackNavigator = createStackNavigator();

export type MealStackParamList = {
  [CATEGORY_MEALS]: { id: string };
  [CATEGORIES]: undefined;
  [MEAL_DETAILS]: { id: string };
};

const MealsNavigator = () => {
  return (
    <MealStackNavigator.Navigator>
      <MealStackNavigator.Screen name={CATEGORIES} component={CategoryScreen} />
      <MealStackNavigator.Screen name={CATEGORY_MEALS} component={CategoryMealScreen} />
      <MealStackNavigator.Screen name={MEAL_DETAILS} component={MealDetailScreen} />
    </MealStackNavigator.Navigator>
  );
};

const MealsTabNavigator = createBottomTabNavigator();
/* eslint-disable */
const getScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
    } else if (route.name === "Settings") {
      iconName = focused ? "ios-list-box" : "ios-list";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});
/* eslint-enable */

export const AppNavigator = () => (
  <MealsTabNavigator.Navigator
    screenOptions={getScreenOptions}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <MealsTabNavigator.Screen name="Meals" component={MealsNavigator} />
    <MealsTabNavigator.Screen name="Favorites" component={FavoriteScreen} />
  </MealsTabNavigator.Navigator>
);
