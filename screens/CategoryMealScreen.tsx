import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { MEAL_DETAILS } from "../navigation/constants";
import { MealStackParamList } from "../navigation/MealsNavigator";
import { useSelector } from "react-redux";
import { MealsState } from "../store/reducers/Types";
import Meal from "../models/meal";
import { RootState } from "../store";

/** Types for the Route and Navigation */

type CategoryMealScreenRouteProp = RouteProp<MealStackParamList, "Category Meals">;

type CategoryMealScreenNavigationProp = StackNavigationProp<MealStackParamList, "Meal Details">;

type CategoryMealScreenProps = {
  route: CategoryMealScreenRouteProp;
  navigation: CategoryMealScreenNavigationProp;
};

const CategoryMealScreen = ({ route, navigation }: CategoryMealScreenProps) => {
  const mealId = route.params.id;
  const meals = useSelector((state: RootState) => state.mealsState.meals);

  const displayedMeals: Meal[] = meals.filter((meal: Meal) => meal.categoryIds.includes(mealId));

  const handleMealSelection = (mealId: string) => {
    navigation.navigate(MEAL_DETAILS, { id: mealId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => <MealItem meal={item} onSelect={handleMealSelection} />}
        keyExtractor={(item, index) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
