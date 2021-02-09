// Node est un gestionnaire d'événements
let events = require("events");

// Création d'un émetteur d'événement
let eventEmitter = new events.EventEmitter();
eventEmitter.on('evenementDramatique', function() {
    console.log("DRAME !!!");
});
eventEmitter.on('essai', function() {
    console.log("ESSAI !!!");
})
eventEmitter.emit('evenementDramatique');
eventEmitter.emit('essai');