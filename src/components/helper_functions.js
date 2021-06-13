export const comparePrice = (a, b) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
};

export const priceSort = (array) => {
  const filtered = array;
  filtered.sort(comparePrice);

  return filtered;
};
