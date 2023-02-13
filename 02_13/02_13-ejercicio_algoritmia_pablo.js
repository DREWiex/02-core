const ej1 = () => {
    const cantidadNotas = 3;
    let notas = [];
    let notaMedia = 0;
    let resultadoFinal;

    /*Calcula la media*/
    function obtenerMedia() {
        notas = solicitarNotas();
        let resultado = 0;
        for (let j = 0; j < cantidadNotas; j++) {
            resultado += parseFloat(notas[j]);
        }
        return (resultado /= cantidadNotas);
    }

    /*Califica la nota*/
    function obtenerResultado(media) {
        if (media >= 7 && media <= 10) {
            return "Sobresaliente";
        } else if (media >= 5 && media < 7) {
            return "Aprobado";
        } else if (media < 5) {
            return "Suspenso";
        } else {
            return "Algo ha ido mal :(.";
        }
    }

    /*Escribe resultados en el html*/
    function mostrarResultado(notasRslt, notaMediaRslt, notaMediaCalifiacion) {
        document.getElementById("nota").innerText = `Notas: ${notasRslt[0]}, ${notasRslt[1]} y ${notasRslt[2]}`;
        document.getElementById("resultado").innerText = `Media: ${notaMediaRslt}.\nCalifiación: ${notaMediaCalifiacion}`;
    }

    /*Solicito notas al usuario*/
    function solicitarNotas() {        
        for (let i = 0; i < cantidadNotas; i++) {
            notas[i] = prompt(`Ingresa la nota ${i + 1}:`);
        }
        return notas;
    }

    notaMedia = obtenerMedia(notas);
    resultadoFinal = obtenerResultado(notaMedia);
    mostrarResultado(notas, notaMedia, resultadoFinal);
}