const section = document.querySelector('#section');
const button = document.querySelector('#btn');

fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then((resp) => resp.ok ? resp.jason() : Promise.reject('Este es el error')) //* operador ternario
    .then((resp) => pintar(resp))
    .catch((error) => console.log(error));

button.addEventListener('click', () => {
    
})

const pintar = (respuesta) => {
    respuesta.forEach(({title, body}) => {
        section.innerHTML += `<h2>${title}</h2>
                                <p>${body}</p>`
    });
};

//* ok: true --> estado 4 y status 200
//* el method por defecto va a ser GET
//* el método .json()

//************************************+ */

//* Con función async

const consulta = async () => {



}