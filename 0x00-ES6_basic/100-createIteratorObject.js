export default function createIteratorObject(report) {
  const [ls, sl] = Object.values(report.allEmployees);

  return [...ls, ...sl];
}
