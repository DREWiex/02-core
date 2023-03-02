function fecha() {
    let dia = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formatoBueno = dia.toLocaleDateString("es-ES", options)
    dia.setHours(12, 00);
    var hora = dia.getHours()
    var minutos = dia.getMinutes()
    console.log("Hoy es " + formatoBueno + " y son las " + hora + ":" + minutos + minutos);
}

fecha()