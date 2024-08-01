export default function updateStudentGradeByCity(listofstudents, city, newGrades) {
  const filtered = listofstudents.filter((elem) => elem.location === city);
  const returned = filtered.map((student) => {
    const newGrade = newGrades.find((gradeobj) => gradeobj.studentId === student.id);
    const newObj = student;
    if (newGrade) {
      newObj.grade = newGrade.grade;
    } else {
      newObj.grade = 'Nan';
    }
    return newObj;
  });
  return returned;
}
