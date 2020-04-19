import { MEALS } from "../../data/dummy-data";
import { MealsState, AddFavoriteAction } from "./Types";

const initialState: MealsState = {
  meals: MEALS,
  favoriteMeals: [],
  filteredMeals: [],
};

const MealsReducer = (state = initialState, action: AddFavoriteAction) => {
  //   switch (action.type) {
  //     case value:
  //       break;

  //     default:
  //       return state;
  //   }
  return state;
};

export default MealsReducer;
