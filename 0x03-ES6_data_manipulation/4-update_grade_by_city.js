/**
 * @returns  an updated list of students. This list will only include students
 * from the specified city, with their grades updated according to the newGrades
 * data.
 */

// eslint-disable-next-line consistent-return
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const newGrade = newGrades.find((grade) => grade.studentId === student.id);
        return {
          ...student,
          grade: newGrade ? newGrade.grade : 'N/A',
        };
      });
  }
}
