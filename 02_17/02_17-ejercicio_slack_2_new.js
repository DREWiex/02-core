const mostrarResultado = document.querySelector('#resultado'); //? capturo el elemento por el id donde quiero añadir la etiqueta y el texto con el resultado final

let arrayAlumnos = [];

let arrayNombres = [];
let arrayNotas1 = [];
let arrayNotas2 = [];

let arrayNotaMedia = [];

function solicitarDatos(){

    let cantidadAlumnos = prompt("Indica el número de alumnos:");
/*
    do{
        let nombre = arrayNombres.push(prompt("Indica un nombre:"));
        let nota1 = arrayNotas1.push(prompt("Indica la primera nota:"));
        let nota2 = arrayNotas2.push(prompt("Indica la segunda nota:"));

        let media = (nota1 + nota2) / 2;
        console.log(media);

        --cantidadAlumnos;
    }while(cantidadAlumnos > 0);

    arrayAlumnos.push(arrayNombres, arrayNotas1, arrayNotas2)

    console.log(arrayAlumnos);

}

/*
function calcularMedia(){

        for(let i = 1; i < arrayAlumnos.length; i += 1){
            let media = arrayAlumnos[i];
            console.log(media);
            // arrayNotaMedia.push(media);
        }
}


function mensajeFinal(){

}
*/