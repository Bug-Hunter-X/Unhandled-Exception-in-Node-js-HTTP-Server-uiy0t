const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // Some code that might throw an error
    const result = someFunctionThatMightThrow();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } catch (error) {
    // Log the error
    console.error('Error:', error);
    // Do not send an error response
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someFunctionThatMightThrow() {
  // Simulate an error
  throw new Error('Something went wrong');
}