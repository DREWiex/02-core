//TODO: Async/await

const getNombre = () => {

    setTimeout(()=>{ //* espera equis tiempo para ejecutar la función //* le pasamos la función callback y separado por una coma el tiempo en milisegundos
        return "Pepe";
    },1000)

}


const saludar = () => {

    console.log(`¡Qué pasa, ${getNombre()}!`);

}

saludar();



//********************************* ************************************//

const getNombre2 = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Pepe');
        }, 1000);
    })

}


const saludar2 = async () => {

    const nombre = await getNombre2()

}

saludar2();


//* La palabra reservada await solo la podemos utilizar en funciones asíncronas