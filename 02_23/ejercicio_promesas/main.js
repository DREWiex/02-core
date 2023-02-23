//TODO: Promesas

//* VARIABLES *//

const arrayAlumnos = [
    { id: 1, nombre: "Pepe" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Juan" },
    { id: 4, nombre: "Pepi" },
    { id: 5, nombre: "Bea" },
  ];
  
  const arrayNotas = [
    { id: 1, nota: 8 },
    { id: 2, nota: 7 },
    { id: 5, nota: 9 },
  ];
  
  const arrayBecas = [
    { id: 2, beca: true },
    { id: 5, beca: false },
  ];
  
  const id = 5;

  let alumno;


//* FUNCIONES *//


const getAlumnos = (id) => {

    let alumno = arrayAlumnos.find((item) => item.id == id)?.nombre

    const promise = new Promise((resolve, reject) => {
    
        if(!alumno){
            reject(`El alumno no existe.`);
        }else{
            resolve(alumno);
        }

    })

    return promise

}//!FUNC-GETALUMNOS


const getNotas = (id) => {

    let nota = arrayNotas.find((item) => item.id == id)?.nota

    const promise = new Promise((resolve, reject) => {
        
        if(!nota){
            reject(`${alumno} no tiene nota`);
        }else{
            resolve(nota);
        }

    })

    return promise;

}//!FUNC-GETNOTAS


const getBecas = (id) => {

    let beca = arrayBecas.find((item) => item.id == id)?.beca

    const promise = new Promise((resolve, reject) => {

        if(beca == undefined){
            reject(`${alumno} no tiene beca.`)
        }else{
            resolve(beca);
        }

    })

    return promise;

}//!FUNC-GETBECAS



//* Invocaciones *//

getAlumnos(id) //! está mal a partir de becas
    .then((resp)=>{
        alumno = resp;
        return getNotas(id)})
    .then((resp)=>{
        nota = resp;
        if(nota == false){
            console.log(`${alumno} no entregó la documentación, por ende, no le corresponde beca.`)
        }else{
            console.log(`${alumno} sí tiene beca.`)
        }
        return getBecas})
    .then((resp)=>{(resp)})
    .catch((error)=>{console.log(error)})


/*    .then((resp)=>{
        if(resp == false){
            console.log(`${alumno} no entregó la documentación, por ende, no le corresponde beca.`)
        }else{
            console.log(`${alumno} sí tiene beca.`)
        }
        return getBecas(id)})
    .then((resp)=>{
        resp=alumno; //* para poder utilizar la propiedad (alumno) del objeto (arrayAlumnos)
        return getNotas(id)}) //! la invocación siempre es un ¡¡¡ return !!!*/
