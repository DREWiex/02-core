//TODO: Ejercicio
//* Pide al usuario varias cadenas de texto. Cuando se pulse el botón de cancelar (del alert), tendrán que mostrarse en el navegador cada cadena de texto concatenada con un guión.

document.addEventListener('DOMContentLoaded', () => {


//* VARIABLES

const arrayTextos = [];

const elementoPrincipal = document.querySelector('#total-cadenas');

const fragment = document.createDocumentFragment();


//* FUNCIONES

const solicitarTexto = () => {

    var pregunta;

    do{
    let cadena = prompt("Escribe lo que quieras:");
    arrayTextos.push(cadena);
    pregunta = confirm("¿Quieres volver a escribir?")
    }while(pregunta != false);

}//!FUNC-SOLICITARTEXTO


const pintarCadenas = () => {

    arrayTextos.forEach((item) => {
        const nuevoElemento = document.createElement('SPAN');
        nuevoElemento.textContent = `${item}`;

        fragment.append(nuevoElemento);
        
    })

    elementoPrincipal.append(fragment);

}//!FUNC-PINTARCADENAS


const unirCadenas = () => {

    document.write(arrayTextos.join('-')); //* entender el funcionamiento del .write

}//!FUNC-UNIRCADENAS


solicitarTexto();
pintarCadenas();
unirCadenas();

})//!LOAD


//*** EXTRA ***//

