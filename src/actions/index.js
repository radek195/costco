export const addToBasket = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const subtractFromBasket = (item) => {
  return {
    type: "SUBTRACT_ITEM",
    payload: item,
  };
};
