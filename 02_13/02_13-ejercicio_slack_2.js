/*
Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
1) Almacenar todos los números en un array
2) Almacenar en otro array los números comprendidos entre el 1 y 250
3) Almacenar en otro array los números comprendidos entre el 251 y 500
*/

const ejercicio2 = function () {
  var num = [];
  const repeat = 10;

  function solicitarNum() {
    for (let i = 0; i < repeat; i++) {
      num[i] = prompt("Indica un número comprendido entre 1 y 500:");
      num[i] = parseInt(num[i]);
    } //! ¿Cómo puedo hacer la verificación en este paso?
    return num;
  }

  solicitarNum();
  console.log(num);

  var arregloMenor = [];
  var arregloMayor = [];

//! La segunda función no hace nada
//! ¿Puedo utilizar la var num directamente o debo declarar otra para poder trabajar con los elementos que la conforman?
//! Sé qué función va a realizar el for, pero tengo problemas para plantear el siguiente paso

  function rangoMenor(){
    for(let i = 0; i < num.length; i++){
        if(num[i] > 0 && num[i] <= 250){
            arregloMenor = num[i];
        }else if(num[i] > 250 && num[i] <= 500){
            arregloMayor = num[i];
        }else{
            alert("Valor incorrecto.")
        }
    }
    return num; //! Aquí tampoco sé qué variable indicar.
  }
  rangoMenor();
  console.log(rangoMenor());
}

ejercicio2();