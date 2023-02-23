//TODO: tryCatch

//* Capturar errores externos a mi código
//* Errores = excepciones
//* Gestionamos los errores para que el programa siga funcionando a pesar del error
//* Evita que pare la aplicación a pesar del error. El catch le da la instrucción en caso de que falle

//* Sintaxis:

try{ //* equivalente al .then()

}catch(error){ //* equivalente al .catch()

}finally{ //* equivalente al .finally()

}

//* Ejemplo:

let total;

const prueba = (num1, num2) => {

    try{
        if(!isNaN(num1) && !isNaN(num5)){

        }else{
            throw new Error("Hay un error");
        }
    }catch(error){
        console.log(error);
    }

}