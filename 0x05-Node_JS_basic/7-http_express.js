const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const pathToDb = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const field = data.trim().split('\n');
      field.shift();
      const cs = [];
      const swe = [];
      field.forEach((line) => {
        const lines = line.split(',');
        if (lines[lines.length - 1] === 'CS') {
          cs.push(lines[0]);
        } else {
          swe.push(lines[0]);
        }
      });
      const total = [...cs, ...swe].length;
      const a = `Number of students: ${total}`;
      const b = `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`;
      const c = `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
      resolve({ a, b, c });
    });
  });
};

app.get('/students', (req, res) => {
  countStudents(pathToDb)
    .then(({ a, b, c }) => {
      res.send(`This is the list of our students\n${a}\n${b}\n${c}`);
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
