import { combineReducers } from "redux";

import { teaTypes, teaProducts, coffeeTypes, coffeeProducts } from "../data";

const typesReducer = () => {
  return [...teaTypes, ...coffeeTypes];
};

const productsReducer = () => {
  return [...teaProducts, ...coffeeProducts];
};

const basketReducer = (state = [], action) => {
  let prevState = state;
  switch (action.type) {
    case "ADD_ITEM":
      for (let item of prevState) {
        if (item.id === action.payload.id) {
          item.amount += 1;
          return [...prevState];
        }
      }

      return [...prevState, action.payload];

    case "SUBTRACT_ITEM":
    
      for (let item of prevState) {
        if (item.id === action.payload.id) {
          item.amount -= 1;

          // if the certain product amount is equal 0, filter out this item and return result
          if (item.amount === 0) {

            //filter the product
            const newState = prevState.filter((prod) => {
              if (prod.id === action.payload.id) {
                return false;
              }
              return true
            })
            return [...newState];
          }
    
          return [...prevState];
        }
      }
    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  types: typesReducer,
  basket: basketReducer,
});
