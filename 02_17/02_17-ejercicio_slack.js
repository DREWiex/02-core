/*
Solicitar los nombres y el sexo de "x" alumnos de un curso  que se han dividido en dos grupos: A y B de acuerdo al sexo y el nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario cuantos alumnos son de cada grupo y los muestre por pantalla.
*/

//! Primer fallo: no determinar el número de alumnos. De haber tenido este dato, podía haber desarrollado el ejercicio con un bucle
//? Pienso que mi planteamiento de la condicional está bien encaminado, pero desconocía que podía utilizar --> nombre[0] < "m" <-- para determinar que la letra es anterior a "m"

var grupoA = [];
var grupoB = [];

function solicitarDatos(){

let sexo = prompt("Indica tu sexo:");
if(sexo == "mujer"){
    let nombreMujer = prompt("Indica tu nombre:"){
        if(nombreMujer[0] == /*aquí iría la condición de un nombre anterior a M*/){
            grupoA.push();
        }else{
            grupoB.push();
        }
    }
}
if(sexo == "hombre"){
    let nombreHombre = prompt("Indica tu nombre:"){
        if(nombreHombre[0] == /*aquí iría la condición de un nombre posterior a N*/){
        grupoB.push();
    }
}










var nombre = prompt("Indica tu nombre:");

if(sexo == "mujer" && nombre[0] == /*aquí iría la condición de un nombre anterior a M*/){
    grupoA.push();
}else{
    grupoB.push();
}

if(sexo == "hombre" && nombre[0] == /*aquí iría la condición de un nombre posterior a N*/){
    grupoA.push();
}else{
    grupoB.push();
}

}