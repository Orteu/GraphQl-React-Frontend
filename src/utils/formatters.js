export const formatProducts = (products) => {
  const formated = [];
  products.map((pr) => formated.push({ ...pr, quantity: 1}));
  return formated;
}