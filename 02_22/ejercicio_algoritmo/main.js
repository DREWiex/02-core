//!TODO: Ejercicio: juego piedra, papel o tijera
//* Genera una opción aleatoria (piedra, papel o tijera) que compite contra la que elegiste.
//* Extra: crear un contador que indique: partidas totales, ganadas y perdidas, y se visualicen por el navegador.

document.addEventListener('DOMContentLoaded', () => {

    //*** VARIABLES ***//

    const arrayOpciones = ["Piedra", "Papel", "Tijera"];
    let contWin = 0;
    let contLose = 0;

    
    //* captures *//

    const contenedor = document.querySelector('#contenedor');
    const botonPiedra = document.querySelector('#piedra');
    const botonPapel = document.querySelector('#papel');
    const botonTijera = document.querySelector('#tijera');


    //*** EVENTOS ***//

    contenedor.addEventListener("click", (ev) => {

        if(ev.botonPiedra){
            piedra();
        }

    })


    //*** FUNCIONES ***//

    const piedra = () => {
        
        let numRandom = Math.floor(Math.random(arrayOpciones) * 3);
        if(numRandom == 0){
            alert("Empate");
        }else if(numRandom == 1){
            alert("Perdiste");
            contLose++
        }else{
            alert("Ganaste");
            contWin++
        }

    }//!FUNC-PIEDRA


})//!LOAD