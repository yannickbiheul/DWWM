let fs = require("fs");
let http = require("http");

http.createServer(function(request,response) {
    fs.readFile('input.txt', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            response.writeHead(200,{ 'Content-Type' : 'text/html; charset=utf-8' });
            response.end(data.toString());
        }
    });
    
}).listen(8081);
