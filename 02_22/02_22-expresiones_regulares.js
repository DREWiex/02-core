//*** EJERCICIO ***//

const ejercicio = () => {

const correo1 = "pepe@pepe.es";
const correo2 = "pe.pe_pepe-23@pepe.es";
const correo3 = "pe.pe_pepe-23@pe_p-e.es";
const correo4 = "pe.pe_pepe-23@pepe.es.com";

let regExp = /^[a-z0-9\.\-_]+@{1}[a-z\-_]+(\.[a-z]{2,}){1,2}$/gm;

return regExp.test(correo1, correo2, correo3, correo4);

}

ejercicio();
console.log(ejercicio());


//*** APUNTES EXTRA ***//

//* Expresiones reguladas aplicadas en validaciones:

const regExp = { //* se guardan en un objeto
    director: /[a-z]/i,
    title: /[a-z0-9]/i
}

//! if(regExp.director.test(director)); //* se arman los condicionales en función de la propiedad correspondiente y a través del test