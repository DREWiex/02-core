//!TODO: Ejercicio: juego piedra, papel o tijera
//* Genera una opción aleatoria (piedra, papel o tijera) que compite contra la que elegiste.
//* Extra: crear un contador que indique: partidas totales, ganadas y perdidas, y se visualicen por el navegador.

document.addEventListener('DOMContentLoaded', () => {

    //*** VARIABLES ***//

    const arrayOpciones = ["Piedra", "Papel", "Tijera"];
    const piedra = 0;
    const papel = 1;
    const tijera = 2;
    let contWin = 0; //* contador de rondas ganadas
    let contLose = 0; //* contador de rondas perdidas



    //*** EVENTOS ***//




    //*** FUNCIONES ***//

    const opcionAleatoria = (num) => {

        let randomNum = 0;

        num = Math.floor(Math.random(arrayOpciones) * 3); //* elige aleatoriamente una opción entre los elementos del arrayOpciones
        randomNum++;

        console.log(randomNum);
        return randomNum;

    }//!FUNC-SOLICITARDATOS


    const compararOpciones = () => {



    }//!FUNC-DESARROLLOEJERCICIO

    opcionAleatoria();
    compararOpciones();

})//!LOAD