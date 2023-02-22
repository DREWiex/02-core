//* EJEMPLO 1

const form = document.querySelector('#form')

form.addEventListener('submit', validateInput) //! ponemos a la escucha al propio formulario (form.addEvent...)

function validateInput() {
    let name = document.forms["the-form"]["your-name"].value;
    console.log(name)
    if (name == "") {
        alert("Debes rellenar este campo");
    }
}


//* EJEMPLO 2

const boton = document.querySelector('#boton')

boton.addEventListener('submit', validateAge)

  function validateAge() {
    var x, text;

    // Get the value of the input field with id="numb"
    let age = document.getElementById("your-age").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(age) || age == "") {
      alert("Rellena este campo, porfavor");
    } else {
      if (age < 18) {
        alert("Debes ser mayor de edad");
      } else if (age > 90) {
        alert("Debes tener menos de 90 años");
      } else {
        alert("Edad correcta");
      }
    }
  }

//! Hay que hacer la validación siempre en el evento. Ejemplo: la edad mínima (no quedarnos solo con min, max de los atributos del input)


//* atributos por defecto de submit: action = qué archivo del back-end va a gestionar esa información / 
//* method GET lo envía a través de la url / el method POST lo envía "empaquetado" (oculto) --> buscar


//* EJEMPLO 3

coconst formulario = document.querySelector('#formulario');
const campoNombre = document.querySelector('#nombre');
const campoApellido = document.querySelector('#apellido');
const campoCorreo = document.querySelector('#correo');
const listaErrores = document.querySelector('#listaErrores');
let objValidar = {
    nombre: false,
    apellido: false,
    correo: false
}
const arrayUSuarios=[]
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault()
    validar();
});
const validar = () => {
    listaErrores.innerHTML=''
    let errores='';
    const nombre = campoNombre.value;
    const apellido = campoApellido.value;
    const correo = campoCorreo.value
    if (isNaN(nombre) && nombre.trim().length > 0) {
        objValidar.nombre = true
    } else {
        objValidar.nombre = false
        errores+='<li>Debes escribir el nombre</li>'
    }
    if (isNaN(apellido) && apellido.trim().length > 0) {
        objValidar.apellido = true
    } else {
        objValidar.apellido = false
        errores+='<li>Debes escribir el apellido</li>'
    }
    if (isNaN(correo) && correo.trim().length > 0) {
        objValidar.correo = true
    } else {
        objValidar.correo = false
        errores+='<li>Debes escribir un correo valido</li>'
    }

    const arrayValidar = Object.values(objValidar)
    const valida = arrayValidar.findIndex(item => item == false);
    if (valida === -1) {
        //Todo a ido bien
        arrayUSuarios.push({
            nombre:nombre,
            apellido:apellido,
            correo:correo
        })
        console.log(arrayUSuarios)
    }else{
        console.log(errores)
        listaErrores.innerHTML=errores
    }
}