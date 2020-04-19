import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import MealsReducer from "./reducers/MealsReducer";

const rootReducer = combineReducers({
  mealsState: MealsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
