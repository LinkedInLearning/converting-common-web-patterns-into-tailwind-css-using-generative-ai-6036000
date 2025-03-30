function x(y, z) { for (var i = 0; i < y.length; i++) { if (y[i] === z) return i; } return -1; }

/**
 * Searches for a target value in an array and returns its index.
 * @param {Array} array - The array to search.
 * @param {*} target - The value to find.
 * @returns {number} Index of the found item, or -1 if not found.
 */
function findIndex(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}