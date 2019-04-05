const fs = require('fs');
const path = require('path');
const http = require('http');
const server = http.createServer();

const port = 3030;
server.on("request", (req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    const largeFilePath = path.join(__dirname, '200MB.txt');

     fs.createReadStream(largeFilePath).pipe(res);
})

server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});