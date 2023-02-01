export default function updateStudentGradeByCity(students, city, grades) {
  const studentsList = Array.isArray(students) ? students.filter((el) => el.location === `${city}`) : [];
  const studentGrade = (val) => {
    if (!val.length) return 'N/A';
    return val[0].grade;
  };
  return studentsList.map((el) => ({
    ...el,
    grade: studentGrade(grades.filter((grad) => grad.studentId === el.id)),
  }));
}
