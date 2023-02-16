/*
1º Solicite al usuario el ingreso por teclado de 3 notas
2º Saque la media de las notas
3º Muestre por pantalla
    - Si la nota es menor que 5 'SUSPENSO'
    - Si la nota es mayor o igual 5 y menor que 7 'APROBADO'
    - Si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'
*/

// PARTE I
function solicitarNotas(){
var nota1 = parseInt(prompt("Por favor, ingresa una primera nota:"));
console.log(nota1);

var nota2 = parseInt(prompt("Ahora ingresa una segunda nota:"));
console.log(nota2);

var nota3 = parseInt(prompt("Por último, ingresa una tercera nota:"));
console.log(nota3);

var sumarNotas = nota1 + nota2 + nota3;
return sumarNotas;
}

// PARTE II
function media(sumarNotas){
    var notaMedia = solicitarNotas(sumarNotas) / 3;
    alert("La nota media es " + notaMedia);
}

// PARTE III
function notas(notaMedia){
    if(media(notaMedia) < 5){
        alert("Suspenso");
    }else if(media(notaMedia) >= 5 && media(notaMedia) < 7){
        alert("Aprobado");
    }else if(media(notaMedia) >= 7 && media(notaMedia) <= 10){
        alert("Sobresaliente");
    }else{
        alert("Valor incorrecto");
    }
}