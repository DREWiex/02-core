//TODO: Ejercicio algoritmia

//* Escribe la fecha y hora actual. Deberá tener este formato: Hoy es lunes, 27 de Febrero de 2023 y son las 12:00 horas.

const fecha = new Date();

const arrayDayWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

const arrayDayMonth = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];


const hoy = () => {

    let dayMonth = fecha.getDate();
    let month = fecha.getMonth();
    let year = fecha.getFullYear();
    let hour = fecha.getHours();
    let minutes = fecha.getMinutes();

    calcularDayWeek();
    calcularDayMonth();

    return (`Hoy es ${calcularDayWeek()}, ${dayMonth} de ${calcularDayMonth()} de ${year} y son las ${hour}:${minutes} horas.`);

}

const calcularDayWeek = () => {

    let dayWeek = fecha.getDay();

    let day;

    for(let i = 0; i < arrayDayWeek.length; i++){
        if(dayWeek == i){
            day = arrayDayWeek[i];
        }
    }

    return day;
}

const calcularDayMonth = () => {

    let dayMonth = fecha.getDate();

    let day;

    for(let i = 0; i < arrayDayMonth.length; i++){
        if(dayMonth == i){
            day = arrayDayMonth[i];
        }
    }

    console.log(typeof day);
    return day;

}

hoy();
console.log(hoy());