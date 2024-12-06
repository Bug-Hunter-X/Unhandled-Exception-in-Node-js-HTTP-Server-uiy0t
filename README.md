# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js where exceptions within an HTTP server are not handled correctly. The server silently fails without providing any feedback to the client.

## Bug

The `bug.js` file contains a Node.js HTTP server that attempts to handle exceptions within a `try...catch` block. However, it fails to send a proper error response to the client if an error occurs.

## Solution

The `bugSolution.js` file provides a corrected version. It sends an appropriate error response (e.g., 500 Internal Server Error) to the client when an exception is caught, ensuring better error handling and user experience.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js`.
4. Make a request to the server (e.g., using `curl`). You will not get any error response even though the code throws an error.
5. Run `node bugSolution.js` to see the fixed version and correct error handling.