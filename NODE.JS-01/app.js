// Core modules or owner files
const http = require('http');

// Called always has a request coming on the server
// function rqListener(req, res) {};

// Callback function called always has a request coming on the server
const server = http.createServer((req, res) => {
    console.log(req);
});

// Two Optionals args port and host
server.listen(3000);