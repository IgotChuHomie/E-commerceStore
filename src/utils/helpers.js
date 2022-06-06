/**
 * this function format price
 * @param {number} number
 * @returns number
 */
export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

/**
 * Get Unique values 
 * @param {array} data 
 * @param {string} type 
 * @returns array
 */
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => {
    return item[type];
  });

  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
