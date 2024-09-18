const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim().split('\n');
    data.shift();
    const cs = [];
    const swe = [];
    data.forEach((line) => {
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
