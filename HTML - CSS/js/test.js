var mult = function(facteur) {
    return(function(number) {
        return number * facteur;
    })
}

var doubleX = mult(2);
var tripleX = mult(3);

console.log(doubleX(15));
console.log(tripleX(33));