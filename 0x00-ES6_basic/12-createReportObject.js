export default function createReportObject(employeesList) {
  const object = {
    allEmployees: employeesList,
    getNumberOfDepartments(args) {
      return Object.keys(args).length;
    },
  };

  return object;
}
