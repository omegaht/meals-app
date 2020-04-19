import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Category from "../models/category";

interface CategoryItemProps {
  category: Category;
  onSelect: (id: string) => void;
}

const CategoryItem = (props: CategoryItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => props.onSelect(props.category.id)}>
        <View
          style={{
            ...styles.item,
            ...{ backgroundColor: props.category.color },
          }}
        >
          <Text style={styles.title}>{props.category.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    margin: 15,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
  },
  item: {
    alignItems: "flex-end",
    borderRadius: 10,
    flex: 1,
    justifyContent: "flex-end",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
  },

  title: {
    fontFamily: "Roboto-Bold",
    padding: 10,
  },
});
