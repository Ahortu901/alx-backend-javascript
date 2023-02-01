export default function getStudentsIdsSum(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.reduce((acc, cVal) => acc + cVal.id, 0);
}
