export const getDiscountPricePercentage = (sellingPrice, original_price) => {
  const discount = original_price - sellingPrice;
  return ((discount / original_price) * 100).toFixed(2);
};
