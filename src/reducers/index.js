import { combineReducers } from "redux";

import { teaTypes, teaProducts, coffeeTypes, coffeeProducts } from "../data";

const typesReducer = () => {
  return [...teaTypes, ...coffeeTypes];
};

const productsReducer = () => {
  return [...teaProducts, ...coffeeProducts];
};

const basketReducer = (state = [], action) => {
  console.log("basketRedu:" + action.payload);
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  types: typesReducer,
  basket: basketReducer,
});
