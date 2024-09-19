const { createServer } = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
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

const hostname = '127.0.0.1';
const port = 1245;
const pathToDb = process.argv[2];
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/students':
      countStudents(pathToDb)
        .then(({ a, b, c }) => {
          res.write('This is the list of our students\n');
          res.write(`${a}\n`);
          res.write(`${b}\n`);
          res.write(`${c}`);
          res.end();
        })
        .catch((error) => {
          res.statusCode = 500;
          res.write(`Error: ${error.message}`);
          res.end();
        });
      break;
    default:
      res.write('Hello Holberton School!');
      res.end();
      break;
  }
});

app.listen(port, hostname);

module.exports = app;
