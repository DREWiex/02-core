//* 1. Usando la función filter en una sola línea coloca en un array las palabras que contienen "t" y/o "a" y están en posiciones impares. array constante del que partimos: ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]

const palabras = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"];

const letraT = "t";
const letraA = "a";

const arrayWords = palabras.filter(function(word, index){if(index % 2 == 0) return word.includes(letraT && letraA)}); // El index tiene que ser par porque la posición es impar. Ejemplo: [0] = 1
console.log(arrayWords);