//TODO: location & URLSearchParams

//* URLSearchParams.has()
//* Returns a boolean value indicating if such a given parameter exists.

//* URLSearchParams.get()
//* Returns the first value associated with the given search parameter.

document.addEventListener('DOMContentLoaded', () => {

    const saberCual = (cual) => {
        console.log(cual);
    }


    const init = () => {

        const url = location.search; //* capturo la url
        console.log(url);

        let params = new URLSearchParams(url); //* consulto si existen parámetros en esa url
        console.log(params);
        console.log(params.has('id')); //* recupero el valor (nature, por ej., en Pexels) del key (query en Pexels)

        if(params.has('id')){ //* si se cumple la condición, que me envíe a una función (abrir 'x' url (página))

        }else{

        }
    
    
    }
    
    init();

});