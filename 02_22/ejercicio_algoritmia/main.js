//!TODO: Ejercicio: juego piedra, papel o tijera
//* Genera una opción aleatoria (piedra, papel o tijera) que compite contra la que elegiste.
//* Extra: crear un contador que indique: partidas totales, ganadas y perdidas, y se visualicen por el navegador.

document.addEventListener('DOMContentLoaded', () => {

    //*** VARIABLES ***//

    const arrayOpciones = ["Piedra", "Papel", "Tijera"];
    const piedra = 0, papel = 1;
    let contWin = 0;
    let contLose = 0;

    
    //* capture *//
    const contenedor = document.querySelector('#contenedor');


    //*** EVENTOS ***//

    contenedor.addEventListener("click", ({target}) => {

        if(target.matches('#piedra')){
            btnPiedra();
        }

        if(target.matches('#papel')){
            btnPapel();
        }

        if(target.matches('#tijera')){
            btnTijera();
        }

    })//!EV-CLICK


    //*** FUNCIONES ***//

    const btnPiedra = () => {
        
        let numRandom = Math.floor(Math.random(arrayOpciones) * 3);
        if(numRandom == piedra){
            console.log("Empate");
        }else if(numRandom == papel){
            console.log("Perdiste");
            contLose++;
        }else{
            console.log("Ganaste");
            contWin++;
        }

    }//!FUNC-PIEDRA

    const btnPapel = () => {

        let numRandom = Math.floor(Math.random(arrayOpciones) * 3);
        if(numRandom == piedra){
            console.log("Ganaste");
            contWin++;
        }else if(numRandom == papel){
            console.log("Empate");
        }else{
            console.log("Perdiste");
            contLose++;
        }

    }//!FUNC-PAPEL

    const btnTijera = () => {

        let numRandom = Math.floor(Math.random(arrayOpciones) * 3);
        if(numRandom == piedra){
            console.log("Perdiste");
            contLose++;
        }else if(numRandom == papel){
            console.log("Ganaste");
            contWin++;
        }else{
            console.log("Empate");
        }

    }//!FUNC-TIJERA    


})//!LOAD