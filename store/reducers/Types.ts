/** Meals Reducer and Action Types */

import Meal from "../../models/meal";

export interface MealsState {
  meals: Meal[];
  favoriteMeals: Meal[];
  filteredMeals: Meal[];
}

export const ADD_FAVORITE = "ADD_FAVORITE";

export interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: Meal;
}
