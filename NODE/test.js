let http = require("http");

http.createServer(function(request,response) {
    response.writeHead(200,{ 'Content-Type' : 'text/plain' });
    response.end("Hello World");
}).listen(8081);

console.log("Le serveur tourne sur le port 8081");