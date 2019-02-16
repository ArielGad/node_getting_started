const http = require("http");

const port = 7000;
const host = '127.0.0.1';

function handleRequest(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');

}

const server = http.createServer(handleRequest);
server.listen(port, host, () =>{
    console.log(`Server is running on http://${host}:${port}`);
});