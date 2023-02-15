const arrayNumbers = [300, 1, 50, 3];

let mas = [];
let menos = [];

mas = arrayNumbers.filter(function(num){return num > 251});
menos = arrayNumbers.filter(function(num){return num < 250});

// El método ".filter" ¿recorre un array?

console.log(mas);
console.log(menos);