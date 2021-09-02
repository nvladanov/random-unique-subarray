import shuffle from "array-shuffle";
import duplicatesRemover from "removeduplicates";

/**
 * Returns a random subarray of the specified length with unique elements
 * @param {Array} array
 * @param {Number} newArrLength
 * @param {Boolean} options.removeDuplicates
 * @param {String} options.key
 *
 * @returns {Array}
 */
export default function uniqueSubarr<RecordType = any>(
  array: RecordType[],
  newArrLength: number,
  options?: {
    removeDuplicates: boolean;
    key: string | undefined;
  }
): RecordType[] {
  const { removeDuplicates = false, key = undefined } = options || {};

  const uniqueArr = removeDuplicates ? duplicatesRemover(array, key) : array;

  if (newArrLength > uniqueArr.length)
    throw new Error(`Subarray can't be larger than an array`);

  const shuffledArr = shuffle(uniqueArr);

  return shuffledArr.slice(0, newArrLength);
}
