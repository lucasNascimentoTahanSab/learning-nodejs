require('dotenv').config() // Module for handling requests to environment variables.
const http = require('http') // Module for handling communications with the server, via Hypertext Transfer Protocol.

// Constants for defining the host and its port where the application will run.
// The constant values are retrieved from the environment variables through the dotenv module.
const hostname = process.env.HOSTNAME
const port = process.env.PORT

// Creation of the server, returning success status (200) and "Hello World" message (defined as plain text on the header).
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

// The Node.JS server starts to listen on the port of the host defined.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})