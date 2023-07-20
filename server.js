const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((request, response) => {
    let filePath = '.' + request.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    if (extname === '.js') {
        contentType = 'text/javascript';
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            response.writeHead(404);
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});