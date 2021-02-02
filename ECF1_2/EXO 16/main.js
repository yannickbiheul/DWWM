let inputUser = document.getElementById("number");
let button = document.getElementById("validNumber");
let regexTel = /^0[1-68]([-. ]?[0-9]{2}){4}$/;
let container = document.querySelector(".container");
let para = document.createElement("p");

button.addEventListener('click', function() {
    if (inputUser.value != "") {
        let input = inputUser.value;
        if (input.match(regexTel)) {
            para.innerHTML = inputUser.value;
            para.style.color = "green";
        } else {
            para.innerHTML = "Ceci n'est pas un numéro de téléphone !";
            para.style.color = "red";
        }
    } else {
        para.innerHTML = "Faudrait peut-être taper un numéro, non ?";
        para.style.color = "red";
    }
    container.appendChild(para);
})
