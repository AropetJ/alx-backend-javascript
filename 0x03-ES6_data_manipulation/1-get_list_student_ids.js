/**
 * @returns an array of ids from a list of objects
 */

export default function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  return arrayOfObjects.map((student) => student.id);
}
