//* REST
//* Recibe un nro. indeterminado de argumentos
//* Siempre devuelve un array
//* Se debe colocar siempre al final (como argumento)
//* Accedo al elemento a través de su llave (key)

function mostrarColores(colorUno,...colores){
    console.log(colorUno);
    console.log(colores);
}

mostrarColores('rojo', 'verde', 'azul');

mostrarColores('rojo');

mostrarColores();



//* SPREAD
//* Lo utilizaremos más para los objetos

function mostrarFrutas(arg1){
    console.log(arg1);
}

arrayFrutas = ['kiwi', 'manzana', 'mango'];

mostrarFrutas(arrayFrutas);

//* Uso real de SPREAD en objetos
//* No importa en dónde colocarlo

const objAlumno={
    nombre: 'Ana',
    edad: 20
}

let objAlumno2 = objAlumno;
console.log(objAlumno2);

objAlumno2.nombre = "pepe";
console.log(objAlumno);
console.log(objAlumno2);

let objAlumno3={
    phone: 666666666,
    ...objAlumno
}

console.log(objAlumno3);

