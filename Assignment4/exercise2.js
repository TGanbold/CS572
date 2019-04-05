const http = require('http');
const url = require('url');
const path = require('path');
const {
    fork
} = require('child_process');

const server = http.createServer();
const port = 8000;

server.on("request", (req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });

    const parsedURL = url.parse(req.url, true);

    if (parsedURL.query.url) {
        const childProcess = fork('largeFileReader.js');
        childProcess.send(path.join(__dirname, parsedURL.query.url));

        childProcess.on('message', (message) => {
            if (message == null) {
                res.end();
            } else if (message) {
                res.write(message.toString());
            }
        });
    }
})

server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});