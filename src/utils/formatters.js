export const formatProducts = (products) => {
  const formated = [];
  products.map((pr) => pr.quantity ? formated.push(pr): formated.push({ ...pr, quantity: 1}));
  return formated;
}