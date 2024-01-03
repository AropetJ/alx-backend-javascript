/**
 * Creates an iterator object that iterates over all employees in a report.
 * @param {Object} report - The report object containing employee data.
 * @returns {Iterator} - The iterator object.
 */
export default function createIteratorObject(report) {
  return (function* _() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
