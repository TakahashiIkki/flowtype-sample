// @flow
const http = require('http');
const server = http.createServer();
let message = 'flowtype';

server.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    requestHandler(request, response);
});

function requestHandler(request, response) {
    response.end('Hello World & ' + message + ' for HTTP');
}

server.listen(5001);