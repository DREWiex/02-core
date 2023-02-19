const mostrarResultado = document.querySelector('#resultado'); //? capturo el elemento por el id donde quiero añadir la etiqueta y el texto con el resultado final

let arrayNombres = [];
let arrayNotas = [];
let arrayNotaMedia = [];

function solicitarDatos(){

    let cantidadAlumnos = prompt("Indica el número de alumnos:");

    do{
        let nombre = arrayNombres.push(prompt("Indica un nombre:"));
        let nota1 = arrayNotas.push(prompt("Indica la primera nota:"));
        let nota2 = arrayNotas.push(prompt("Indica la segunda nota:"));
        --cantidadAlumnos;
    }while(cantidadAlumnos > 0);

    console.log(arrayNombres);
    console.log(arrayNotas);    

}


function calcularMedia(){

        for(let i = 0; i < arrayNotas.length; i += 2){ //? quizás plantear un for dentro de otro for
            let media = arrayNotas[i] + arrayNotas[i++]; //! concatena, no suma (son elementos de un array, no números); además que el [i++] no está bien planteado
            console.log(media);
            // arrayNotaMedia.push(media);
        }
}


function mensajeFinal(){

}