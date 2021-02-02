let url_array;
let controller;
let action;
let argument;

function explose(url) {
    url_array = url.split("/");
    controller = url_array[1];
    action = url_array[2];
    argument = url_array[3];
    console.log("Controller : " + controller + " Action : " + action + " Argument : " + argument);
}

explose("/animalController/modifier/1");