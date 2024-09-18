const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port, hostname);

module.exports = app;
