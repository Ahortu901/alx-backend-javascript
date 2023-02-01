export default function hasValuesFromArray(sets, arr) {
  return arr.every((value) => sets.has(value));
}
