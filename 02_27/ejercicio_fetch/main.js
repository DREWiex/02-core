//TODO: Ejercicio fetch
//* Crear un programa que muestre el listado completo de usuarios (button) y, también, los muestre individualmente (button/select)

document.addEventListener('DOMContentLoaded', () => {

    //*** VARIABLES ***//

    const fragment = document.createDocumentFragment();

    const section = document.querySelector('#section');
    const tabla = document.querySelector('#table-body');
    const botones = document.querySelector('#botones');
    const form = document.querySelector('#form');




    //*** EVENTOS ***//

    section.addEventListener('click', ({target}) => {
        if(target.matches('#btn')){
            pintarTodos();
            pintarPages();
        }

        if(target.matches('#botones button')){
            const id=target.dataset['id']
            pintarTodos(id);
            
        }

    });




    //*** FUNCIONES ***//

    const peticion = async (id) => {

        try {
            
            let solicitud = await fetch(`https://reqres.in/api/users?page=${id}`);

            if(solicitud.ok){
                let solicitudJSON = await solicitud.json(); //* utilizamos await porque fetch() devuelve una promesa (función async)
                return {
                    ok: true,
                    solicitudJSON
                }
            }else{
                throw ({
                    ok: false,
                    message: 'Error en la petición'
                })
            }
            
        } catch (error) {
            
            return error;
        
        }

    }



    const pages = async () => { //* función que devuelve el total de páginas

        const {solicitudJSON} = await peticion();

        let {total_pages} = solicitudJSON;
        return total_pages;

    }



    const pintarPages = async () => { //* función que pinta los botones según el número de páginas devuelta en pages()

        botones.innerHTML = '';

        const pag = await pages();

        for(let i = 1; i <= pag; i++){
            const boton = document.createElement('BUTTON');
                boton.type = 'button'; //* old school ways
                boton.dataset['id'] = i;
                boton.textContent = i;

            fragment.append(boton);

        }

        botones.append(fragment);
        
    };

 

    const pintarTodos = async (id=1) => {

        tabla.innerHTML = '';

        const {ok, solicitudJSON} = await peticion(id);

        const {data} = solicitudJSON;

        if(ok){
            data.forEach((item) => {
                const tableRow = document.createElement('TR');
                let nameTD = document.createElement('TD');
                nameTD.textContent = item.first_name;
                let apellidoTD = document.createElement('TD');
                apellidoTD.textContent = item.last_name;
                let emailTD = document.createElement('TD');
                emailTD.textContent = item.email;
                let fotoTD = document.createElement('TD');
                let fotoImg = document.createElement('IMG');
                fotoImg.src = item.avatar;

                fotoTD.append(fotoImg);

                tableRow.append(nameTD, apellidoTD, emailTD, fotoTD);

                fragment.append(tableRow);

            });

            tabla.append(fragment);

        }
        
    }


}); //!LOAD


//*** FETCH (PROMESA) ***//

/*
    const peticion = () => {
    fetch('https://reqres.in/api/users?page=2')
        .then((resp) => resp.ok ? resp.json() : Promise.reject('Error en la consulta'))
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error));
    }
    peticion()

*/