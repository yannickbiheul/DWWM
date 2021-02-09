let http = require('http');

let fs = require('fs');

let url = require('url');

const EventEmitter = require('events');

let App = {
    start: function(port) {
        let emitter = new EventEmitter();

        http.createServer((request, response) => {
            response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
            });
            if (request.url == '/') {
                emitter.emit('root', response);
            }
            response.end();
        }).listen(port);
        return emitter;
    }
}

let app = App.start(8081);
app.on('root', function(response) {
    response.write('Je suis à la racine');
})

/*

let server = http.createServer(); 

// Dès qu'une requête est lancée (par exemple ici localhost:8081 sur le navigateur), il éxécute le code
server.on('request', (request, response) => {

    response.writeHead(200);
    let query = url.parse(request.url, true).query;
    let name = query.name === undefined ? "Inconnu" : query.name;
    

    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            response.writeHead(404);
            response.end("Ce fichier n'existe pas !");
        } else {
            response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
            });
            data = data.replace('{{ name }}', name);
            response.end(data);
        }

    })
    
});

server.listen(8081);
*/