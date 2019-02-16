const http = require("http");
const fs = require("fs");

const port = 7000;
const host = '127.0.0.1';


// 404 response
function send404ErrorMessage(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404 - Page not found!");
    response.end();
}

function handleRequest(req, res){
    if ( req.method === 'GET' && req.url === '/'){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream('./index.html').pipe(res);
    }
    else {
        send404ErrorMessage(res);
    }

}

const server = http.createServer(handleRequest);
server.listen(port, host, () =>{
    console.log(`Server is running on http://${host}:${port}`);
});
