//* Mismo ejercicio alumnos, notas, becas…

//* throw = error (reject)
//* return = resp (resolve)

const arrayAlumnos = [
    { id: 1, nombre: 'Pepe' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Juan' },
    { id: 4, nombre: 'Pepi' },
    { id: 5, nombre: 'bea' }
];

const arrayNotas = [
    { id: 1, nota: 8 },
    { id: 2, nota: 7 },
    { id: 5, nota: 9 }
];

const arrayBecas=[
    { id: 2, beca: 1 },
    { id: 5, beca: 0 }
];

const id = 3;


//* FUNCIONES *//

//* Trabajamos con funciones asíncronas para evitar errores al momento de cargar la información solicitada

const getAlumnos = async (id) => {

    let alumno = arrayAlumnos.find((item) => item.id == id); //* si coincide el id, me devuelve todo el objeto del array

    if(!alumno) throw(`El alumno con id ${id} no existe.`); //* si no consigue el alumno, el throw devuelve el error
    //! forma contraida del condicional: si solo tiene una línea de código/instrucción, puedo no colocar las llaves
    else return(alumno); //* si lo consigue, devuelve el objeto del array

}


const getNotas = async (id, nombre) => {

    let nota = arrayNotas.find((item) => item.id == id);

    if (!nota) throw(`${nombre} no tiene nota.`);
    
    else return(nota);

}

/*
const getBecas = async (id) => {

    let beca = arrayBecas.find((item) => item.id = id);

    if (beca == undefined) throw(`${nombre} no tiene beca.`)

    else return(beca);

}
*/


const getDatos = async (id) => {
    
    const {nombre} = await getAlumnos(id); //* {nombre} destructuración del objeto que devuelve alumno (línea 32)
    
    const {nota} = await getNotas (id,nombre); //? resolver duda sobre el segundo argumento (utilizado en el return)

    return `${nombre}, tiene una nota de ${nota}`;

}


//* Invocación *//

getDatos(id)
    .then((resp)=>{console.log(resp)})
    .catch((error)=>{console.log(error)})