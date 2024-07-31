export default function updateStudentGradeByCity(listofstudents, city, newGrades) {
  const filtered = listofstudents.filter((elem) => elem.location === city);
  return filtered;
}
