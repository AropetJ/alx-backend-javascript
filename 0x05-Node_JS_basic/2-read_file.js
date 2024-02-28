const fs = require('fs');

function countStudents(path) {
  const students = {};
  const fields = {};
  let count = 0;

  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n');

    for (const line of lines) {
      if (line) {
        count += 1;
        const [name, , , field] = line.split(',');

        students[field] = students[field] || [];
        students[field].push(name);

        fields[field] = (fields[field] || 0) + 1;
      }
    }

    const length = count - 1;
    console.log(`Number of students: ${length}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
