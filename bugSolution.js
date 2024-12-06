const http = require('http');

const server = http.createServer((req, res) => {
  // Improved error handling
  try {
    const result = someFunctionThatMightThrow();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someFunctionThatMightThrow() {
  // Simulate an error
  throw new Error('Something went wrong');
}