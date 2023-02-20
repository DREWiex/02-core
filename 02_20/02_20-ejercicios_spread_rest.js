//TODO: EJERCICIOS SPREAD/REST

//* 1) Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.

const sumEveryOther = (...numbers) => {
  let total = 0;

  numbers.forEach((item) => {
    total += item;
  });

  return total;
};

console.log(sumEveryOther(1, 2, 3, 4));


//* 2) Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.

const addOnlyNums = (...cualquierValor) => {
  let total = 0;

  cualquierValor.filter((num) => {
    if (!isNaN(num)) {
      return (total += parseInt(num));
    }
  });

  return total;
};

console.log(addOnlyNums("string", 2, 45, 5, "perro", "10", 2));


//* 3) Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...anyValue) => {
    
    return anyValue.length;

}

console.log(countTheArgs(1,2,"gato", "10"));


//* 4) Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const combineTwoArrays = (argUno, argDos) => {

    

}

arrayUno = [1, "ola", 3];
arrayDos = [4, 5, "6"];

console.log(combineTwoArrays(arrayUno, arrayDos));