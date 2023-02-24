//TODO: Ejercicio algoritmia
//* Cree una función que acepte un Date object y regrese true si es Nochebuena (24 de diciembre) y false en caso contrario.


//*** VARIABLES ***//

let fecha;


//*** FUNCIONES ***//

const date = () => {

  fecha = new Date();
  calcularFecha();

}; //!FUNC-DATE

const calcularFecha = () => {

  if(fecha.getDate() == 24 && fecha.getMonth() == 11){
    console.log(true);
  }else{
    console.log(false);
  }

}; //!FUNC-VALIDAR

date();