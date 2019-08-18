"use strict";

const shuffle = require("array-shuffle");
const removeDuplicates = require("removeduplicates").default;

/**
 * Returns a random subarray of the specified length with unique elements
 * @param {Array} array 
 * @param {Number} newArrLength 
 * @param {Boolean} options.removeDuplicates 
 * @param {String} options.key
 * 
 * @returns {Array}
 */
const uniqueSubarr = (array, newArrLength, options = {
    removeDuplicates: false,
    key: undefined
}) => {

  const uniqueArr = options.removeDuplicates 
    ? removeDuplicates(array, options.key) 
    : array;
    
  if (newArrLength > uniqueArr.length)
    throw new Error(`Subarray can't be larger than an array`);

  const shuffledArr = shuffle(uniqueArr);
  return shuffledArr.slice(0, newArrLength);
};

module.exports = uniqueSubarr;
