export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = [];

  for (const employee of reportWithIterator) {
    allEmployees.push(employee);
  }

  return allEmployees.join(' | ');
}