//* Destructuring
//* Almacenar en variables o constantes, tanto de objetos como arrays, 

const objAlumno={
    nombre: 'Ana',
    edad: 20,
    contacto:{
        phone: 666666666,
        email: 'ana@correo.es'
    }
}

const {nombre:nom, edad, contacto:{phone}}=objAlumno; //! :nom --> declaro una nueva constante con un nombre distinto para evitar conflictos, pero toma el valor de nombre del objeto. Ejemplo: si al pasarte los datos te lo mandan con nombre y tú ya tienes declarada una variable nombre
console.log(nom,edad, phone);

//! Desestructurar con el mismo nombre de la propiedad --> const {nombre}=objAlumno
/*
const arrayAlumnos={
    {
        nombre: 'ana',
        edad: 20,
        phone: 666666666;
    }
    {
        nombre: 'jose',
        edad: 32,
        phone: 999999999;
    }

}*/

//! En el forEach, el primer argumento siempre es el item

/*arrayAlumnos.forEach(({nombre})=>{

})
*/

//* Destructuring una array

const arrayCosas=['Ana', 20, 666666666];

// const nombre = arrayCosas[0] --> esto es lo que está haciendo el destructuring

const [nombre, otraCosa, masCosas]=arrayCosas;

console.log(nombre, otraCosa, masCosas);


const arrayCosasDos=[['Ana', 20, 666666666], ['Pablo', 43, 999999999]];

arrayCosasDos.forEach(({nombre}));