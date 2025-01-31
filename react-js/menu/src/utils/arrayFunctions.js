export const rmDupStrFromArray = function (array) {
  return [...new Set(array)];
};
