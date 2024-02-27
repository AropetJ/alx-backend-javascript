const fs = require('fs');

function countStudents(path) {
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = fs.readFileSync(path, 'utf8').trim();

    const lines = data.split('\n').filter((line, index) => index > 0 && line.trim() !== ''); // Ignore the first row and empty lines
    const students = lines.map((line) => line.split(','));

    const fields = {};
    let totalStudents = 0;

    students.forEach((student) => {
      // eslint-disable-next-line no-unused-vars
      const [firstName, lastName, age, field] = student;

      if (!fields[field]) {
        fields[field] = { count: 1, names: [firstName] };
      } else {
        fields[field].count += 1;
        fields[field].names.push(firstName);
      }

      totalStudents += 1;
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
      }
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
