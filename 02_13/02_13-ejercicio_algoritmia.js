/*
1º Solicite al usuario el ingreso por teclado de 3 notas
2º Saque la media de las notas
3º Muestre por pantalla
    - Si la nota es menor que 5 'SUSPENSO'
    - Si la nota es mayor o igual 5 y menor que 7 'APROBADO'
    - Si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'
*/

// PARTE I
var sumarNotas

function solicitarNotas(){
var nota1 = parseInt(prompt("Por favor, ingresa una primera nota:"));
console.log(nota1);

var nota2 = parseInt(prompt("Ahora ingresa una segunda nota:"));
console.log(nota2);

var nota3 = parseInt(prompt("Por último, ingresa una tercera nota:"));
console.log(nota3);

sumarNotas = nota1 + nota2 + nota3;
console.log(sumarNotas);
}

// PARTE II
var notaMedia;

function media(){
    notaMedia = sumarNotas / 3;
    alert("La nota media es " + notaMedia);
    return notaMedia;
}

// PARTE III
function notas(){
    if(notaMedia < 5){
        alert("Suspenso");
    }else if(notaMedia >= 5 && notaMedia < 7){
        alert("Aprobado");
    }else if(notaMedia >= 7 && notaMedia <= 10){
        alert("Sobresaliente");
    }else{
        alert("Valor incorrecto");
    }
}