//* VARIABLES *//

const lista = document.querySelector('#lista');
const boton = document.querySelector('#boton');

const arrayFotos = [
    {
        id: 'a1',
        nombre: 'nombre1'
    }
    {
        id: 'a2',
        nombre: 'nombre2'
    }
    {
        id: 'a3',
        nombre: 'nombre3'
    }
    {
        id: 'a4',
        nombre: 'nombre4'
    }
];


//* EVENTOS *//

// boton.addEventListener('click', pintarEnLista); //! error: una función expresada no puede ser llamada antes de ser declarada

boton.addEventListener('click', ()=>{ //* si la llamo dentro de otra función, sí funciona
    pintarEnLista();
});

lista.addEventListener('click', ({target}))


//* FUNCIONES *//

const pintarEnLista=()=>{
    arrayFotos.forEach(({id, nombre})=>{
        lista.innerHTML += `<li id=${id}>${nombre}</li>`
    })
};

const eliminarLocal
const agregarLocal


//* APUNTES EXTRA *//

//* Orden para trabajar en el documento:
//* 1. Variables
//* 2. Eventos
//* 3. Funciones

//* .matches: método que comprueba si el elemento sería seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna false.
//* .closest: método que recorre el elemento y sus padres (dirigiéndose hacia la raiz del documento) hasta encontrar un nodo que coincida con el selector especificado.

//* DOM traversing: (buscar).