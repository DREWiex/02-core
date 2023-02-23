//TODO: Ejercicio algoritmia
//* Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario.

//*** VARIABLES ***//

let sumar = 0;
let num;


//*** FUNCIONES ***//

const solicitarNum = () => {

    do{
    num = prompt("Indica un número:");
    validarNum()
    }while(isNaN(num));

}


const validarNum = () => {

  if (!isNaN(num)) {
    //calcular();
    console.log("Sí es un número válido.")
  } else {
    console.log("No es un número válido.");
  }

};

/*
const calcular = () => {

    for(i=0; i<num.lenght; i++){
        if(Number.isInteger(num) && i>0){
            console.log("Puedo realizar la operación.");
        }else{
            console.log("No puedo realizar la operación.")
        }
    }
}
*/

solicitarNum();