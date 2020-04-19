import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import CategoryItem from "../components/CategoryItem";
import { CATEGORIES as CategoryList } from "../data/dummy-data";
import { StackNavigationProp } from "@react-navigation/stack";
import { MealStackParamList } from "../navigation/MealsNavigator";

import { CATEGORIES, MEAL_DETAILS, CATEGORY_MEALS } from "../navigation/constants";

type CategoryScreenNavigationProp = StackNavigationProp<MealStackParamList, "Categories">;

type CategoryScreenProps = {
  navigation: CategoryScreenNavigationProp;
};

const CategoryScreen = (props: CategoryScreenProps) => {
  const handleCategorySelection = (categoryId: string) => {
    props.navigation.navigate(CATEGORY_MEALS, { id: categoryId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CategoryList}
        renderItem={({ item }) => <CategoryItem category={item} onSelect={handleCategorySelection} />}
        keyExtractor={(item, index) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
