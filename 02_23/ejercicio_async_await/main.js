//* Mismo ejercicio alumnos, notas, becas…

//* throw = error (reject)
//* return = resp (resolve)

const arrayAlumnos = [
    { id: 1, nombre: 'Pepe' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Juan' },
    { id: 4, nombre: 'Pepi' },
    { id: 5, nombre: 'Bea' }
];

const arrayNotas = [
    { id: 1, nota: 8 },
    { id: 2, nota: 7 },
    { id: 5, nota: 9 }
];

const arrayBecas=[
    { id: 2, beca: true },
    { id: 5, beca: false }
];

const id = 2;


//* FUNCIONES *//


const getAlumnos = async (id) => {

    let alumno = arrayAlumnos.find((item) => item.id == id);

    if(!alumno) throw(`El alumno con id ${id} no existe.`);

    else return(alumno);

}


const getNotas = async (id, nombre) => {

    let nota = arrayNotas.find((item) => item.id == id);

    if (!nota) throw(`${nombre} no tiene ninguna nota.`);
    
    else return(nota);

}


const getBecas = async (id, nombre) => {

    let beca = arrayBecas.find((item) => item.id = id);

    if (beca == undefined) throw(`${nombre} no puede solicitar la beca.`);

    else return(beca);

}


const getDatos = async (id) => {

    try {

        const {nombre} = await getAlumnos(id);

        const {nota} = await getNotas (id,nombre);

        //throw `La nota de ${nombre} es ${nota}.`;

        const {beca} = await getBecas (id);
        
    } catch (error) {

        console.log(error);
        
    }        

}


//* Invocación *//

getDatos(id);