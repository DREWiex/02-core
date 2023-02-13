/*
1º Solicite al usuario el ingreso por teclado de 3 notas
2º Saque la media de las notas
3º Muestre por pantalla
    - Si la nota es menor que 5 'SUSPENSO'
    - Si la nota es mayor o igual 5 y menor que 7 'APROBADO'
    - Si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'
*/

// PARTE I

var nota1, nota2, nota3;

function mensaje(){
nota1 = prompt("Por favor, ingresa una primera nota:");
console.log(nota1);
nota2 = prompt("Ahora ingresa una segunda nota:");
console.log(nota2);
nota3 = prompt("Por último, ingresa una tercera nota:");
console.log(nota3);
}

// PARTE II

const MEDIA = () => (nota1 + nota2 + nota3) / 3;
    console.log(MEDIA);

// PARTE III

function notas(){
    if(MEDIA < 5){
        alert("Suspenso");
    }else if(MEDIA >= 5 && MEDIA < 7){
        alert("Aprobado");
    }else if(MEDIA >= 7 && MEDIA <= 10){
        alert("Sobresaliente");
    }else{
        alert("Valor incorrecto");
    }
}