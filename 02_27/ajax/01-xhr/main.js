const section = document.querySelector('#section');

const xhr = new XMLHttpRequest();
console.log(xhr); //* devuelve un objeto

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1/posts'); //* método del objeto new XMLHttpRequest()

//* Propiedades y métodos

//* readyState - Contiene el estado del XHR, pueden ser:

//* (estado) 0: La solicitud no se ha inicializado -> antes del xhr.open
//* (estado) 1: Se establece la conexión -> después del xhr.open
//* (estado) 2: La solicitud se ha recibido
//* (estado) 3: Se está procesando la solicitud
//* (estado) 4: La solicitud ha finalizado y la respuesta está preparada -> el que nos interesa

xhr.addEventListener('readystatechange', () => {
    
    if(xhr.readyState == 4 && xhr.status == 200){ //* recibiré lo que solicito al servidor cuando el estado sea 4 y el status sea 200
        
        const respuesta = JSON.parse(xhr.responseText); //* parseo el texto a un JSON

        pintar(respuesta)
    }
})


//! la función siempre tiene que estar antes del .send()
xhr.send() //* método del objeto new XMLHttpRequest()

//* método GET: solo solicita los recursos
//* método POST: se envía la información encapsulada

const pintar = (respuesta) => {

    respuesta.forEach(({title, body}) => { //! si en el innerHTML no colocamos +=, solo se creará una vez porque se sobreescribe constantemente; es decir, se creará el último
        section.innerHTML += `<h2>${title}</h2>
                                <p>${body}</p>`
    });

};