/*
1. Usando la función filter en una sola línea coloca en un array las palabras que contienen "t" y/o "a" y están
en posiciones impares.
array constante del que partimos: ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]
*/
/*
const palabras = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"];


var palabrasPosImpar = [];

function posImpar(){
    for(let i = 1; i < palabras.length; i = i + 2){

    }
}

posImpar();
*/

// const palabrasConT = palabras.filter(letraT => letraT.length == "t");

// Meter en una array los que son pares y en otro los que son impares

const numeros = [20, 145, 12, 367, 98, 44, 182, 223, 500, 650];

const numPares = numeros.filter(function numPar(par){return par % 2 == 0});
console.log(numPares);

const numImpares = numeros.filter(function numImpar(impar){return impar % 2 != 0})
console.log(numImpares);