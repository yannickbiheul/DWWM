let http = require("http");
let fs = require("fs");

http.createServer(function(request,response) {
    
    fs.readFile('index.html', function(err, data) {
        if (err) throw err;
           
        response.writeHead(200,{ 'Content-Type' : 'text/html; charset=utf-8' });
        response.end(data);
    })
    
}).listen(8081);