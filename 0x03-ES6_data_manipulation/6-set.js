/**
 * @returns a set from an array
 */

// eslint-disable-next-line consistent-return
export default function setFromArray(arrayOfNumbers) {
  if (arrayOfNumbers instanceof Array) {
    return new Set(arrayOfNumbers);
  }
}
