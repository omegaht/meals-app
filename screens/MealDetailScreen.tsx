import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { MealStackParamList } from "../navigation/MealsNavigator";
import { RouteProp } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

type MealDetailScreenRouteProp = RouteProp<MealStackParamList, "Meal Details">;

type MealDetailScreenProps = {
  route: MealDetailScreenRouteProp;
};

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = ({ route }: MealDetailScreenProps) => {
  const mealId = route.params.id;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (selectedMeal === undefined) {
    return <Text>No meal found!</Text>;
  }

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
