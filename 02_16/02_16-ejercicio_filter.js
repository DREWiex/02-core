// Meter en una array los que son pares y en otro los que son impares

const numeros = [20, 145, 12, 367, 98, 44, 182, 223, 500, 650, 35, 68];

const numPares = numeros.filter(function numPar(par){return par % 2 == 0});
console.log(numPares);

const numImpares = numeros.filter(function numImpar(impar){return impar % 2 != 0})
console.log(numImpares);