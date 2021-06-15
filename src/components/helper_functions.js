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

export const isTea = (content) => {
  if (content[0].title === "Classic") {
    return true;
  } else if (content[0].title === "Arabica") {
    return false;
  }
};

export const returnByList = (arr, name) => {
  const types = arr.filter((item) => {
    return item.list === name;
  });
  return types;
};
