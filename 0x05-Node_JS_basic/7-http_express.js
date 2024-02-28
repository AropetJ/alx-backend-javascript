const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const [name, , field] = lines[i].split(',');
            if (students[field]) {
              students[field].push(name);
            } else {
              students[field] = [name];
            }
            fields[field] = (fields[field] || 0) + 1;
          }
        }
        const studentCount = length - 1;
        let output = `Number of students: ${studentCount}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  const fileName = process.argv[2].toString();
  countStudents(fileName)
    .then((output) => {
      response.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      console.error(error);
      response.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
