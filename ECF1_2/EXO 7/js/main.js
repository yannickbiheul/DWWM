function multiplierPar(nombre1) {
    const multiplicateur = nombre1;
    return function(nombre2) {
        return multiplicateur * nombre2;
    }
}

let multiplierPar2 = multiplierPar(2);
console.log(multiplierPar2(9));