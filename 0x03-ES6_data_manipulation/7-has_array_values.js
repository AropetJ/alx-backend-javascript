/**
 * @returns a boolean if all elements in the array exist
 */

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
