export const filterProducts = (products, searchTerm) => {
  const term = searchTerm.toLowerCase().trim();

  return products.filter((product) =>
    product.title?.toLowerCase().includes(term),
  );
};
export const filterProductsByCategory = (products, category) => {
  if (!category) return products;

  return products.filter(
    (product) => product.category?.toLowerCase() === category.toLowerCase(),
  );
};
