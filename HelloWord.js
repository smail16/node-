// console.log("Hello Word")

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Word');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const fs = require('fs');

try {
  const data = fs.readFileSync('./Welcome.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}