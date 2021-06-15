export const addToBasket = (itemId) => {
  console.log("add");
  return {
    type: "ADD_ITEM",
    payload: itemId,
  };
};
