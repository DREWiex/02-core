//* PROMESAS

//* Sintaxis:

function nombreFuncion(){
    let promesa=new Promise((resolve,reject)=>{ //* instanciamos un objeto de la clase Promise
      if(ok){
          resolve('todo bien')
      }else{
          reject('todo mal')
      }
     })
      return promesa
  }
   
  //INVOCACIÓN
  
  nombreFuncion()
    .then((respuesta)=>{instrucciones}) 	//ejecuta el resolve
    .catch((error)=>{instrucciones})		// ejecuta el reject
    .finally(()=>{instrucciones})			// se ejecuta indistintamente entro por el then o por el catch


//* Ejemplo:

const cosa = () => {
    const promise=new Promise((resolve, reject)=>{  //* en la clase (Promise()) recibimos las propiedades(?) del método constructor

        if(true){
            resolve("Todo bien");
        }else{
            reject("Todo mal");
        }
    })

    return promise;

    //* podemos ahorrar líneas colocando el return directamente en la constante (línea 27) (ver a continuación)
    //* return new Promise...
    //* si la condicional solo recibe una línea de instrucción, podemos no usar las llaves (ver a continuación)
    //* if(true) resolve('todo bien')
    //* else reject('todo mal')
    //* resultado final:
    //* return new Promise ((resolve, reject) => {
    //* if(true) resolve('todo bien')
    //* else reject('todo mal')
    //* })

}

cosa() //* reciben funciones callbacks las tres (ver a continuación)
    .then((resp)=>{console.log(resp)}) //* recibe la función resolve()
    .catch((error)=>{console.log(error)}) //* recibe la función reject()
    .finally(()=>{console.log('Entra en el finally')}) //* el método finally() entrará siempre


//* el método .then() es el que va a resolver la promesa cuando entre por el 'resolve'
//* el método .catch() es el que va a resolver la promesa cuando entre por el 'reject' ("salió mal")
//* el método .finally() siempre se va a recibir (es el que "mata" la conexión con la base de datos) indiferentemente...
//* el método .constructor() recibe los parámetros de las funciones callbacks (resolve,reject)
//* state "fullfilled" = aceptó el resolve
//* Una promesa es igual a un objeto (cosa().then.().catch().finally())