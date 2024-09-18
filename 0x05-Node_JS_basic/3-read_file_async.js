const fs = require('fs');

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
      console.log(`Number of students: ${total}`);
      console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
      console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
      resolve();
    });
  });
};

module.exports = countStudents;
