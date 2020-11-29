const secDiv = document.getElementById("sec");
const minDiv = document.getElementById("min");
const hourDiv = document.getElementById("hour");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

let rotateSec = 0;
let rotateMin = 0;
let rotateHour = 0;

let lancer;

function tourne() {
    lancer = setInterval(lancerHorloge, 1000);
    start.style.display = "none";
    stop.style.display = "block";
}

function lancerHorloge() {

    rotateSec += 6;
    secDiv.style.transform = `rotate(${rotateSec}deg)`;
    rotateMin += 0.1;
    minDiv.style.transform = `rotate(${rotateMin}deg)`;
    rotateHour += 0.01;
    hourDiv.style.transform = `rotate(${rotateHour}deg)`;

}

function tournePas() {
    clearInterval(lancer);
    start.style.display = "block";
    stop.style.display = "none";
}





// if (rotateMin == 360) {
//     rotateSec = 0;
//     rotateMin = 0;
//     rotateHour += 6;
//     hourDiv.style.transform = `rotate(${rotateHour}deg)`;
// } else {
//     if (rotateSec == 360) {
//         rotateSec = 0;
//         rotateMin += 6;
//         minDiv.style.transform = `rotate(${rotateMin}deg)`;
//         rotateSec += 6;
//         secDiv.style.transform = `rotate(${rotateSec}deg)`;
//     } else {
//         rotateSec += 6;
//         secDiv.style.transform = `rotate(${rotateSec}deg)`;
//     }
// }


