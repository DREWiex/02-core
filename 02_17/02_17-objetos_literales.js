//? JSON = JavaScript Object Notation

const objCoche{ //*los objetos se declaran con las llaves
    marca: 'seat', //* el listado a continuación son las propiedades
    modelo: 'panda',
    year: 1800,
    colores: ['rojo', 'verde'],
    propietario: {
        nombre: 'Pepe',
        phone: 699999999,
        email: 'pepe@hotmail.com'
    },
    arrancar: () => {console.log('El coche está arrancando.')}
}

//! Todos los objetos derivan del objeto padre
//* Accedemos a las propiedades del objeto 

console.log(objCoche);

for (let key in objCoche);
console.log(key);
console.table(objCoche[key]); //* otra forma de ver en consola

//* Recorrer arrays:
//* for(let key/index) --> Ejemplo de key: marca.

//!

let objAlumno={
    nombre: 'Ana',
    edad: 23
}

objAlumno2 = objAlumno;
console.log(objAlumno2);