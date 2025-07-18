const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html');
    res.end('<h1> Welcome to nNode.js with HTML!</h1>');
});

server.listen(2000);