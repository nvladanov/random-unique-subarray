"use strict";

const shuffle = require("array-shuffle");

/**
 * Returns a subarray of the specified length with unique elements
 * @param {Array} array
 * @param {Number} newArrLength
 */
const uniqueSubarr = (array, newArrLength) => {
  if (newArrLength > array.length)
    throw new Error(`Subarray can't be larger than an array`);

  const shuffledArr = shuffle(array);
  return shuffledArr.slice(0, newArrLength);
};

module.exports = uniqueSubarr;
