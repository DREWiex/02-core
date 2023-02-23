//* CALLBACKS HELL

//* VARIABLES *//

const arrayAlumnos = [
  { id: 1, nombre: "Pepe" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Juan" },
  { id: 4, nombre: "Pepi" },
  { id: 5, nombre: "Bea" },
];

const arrayNotas = [
  { id: 1, nota: 8 },
  { id: 2, nota: 7 },
  { id: 5, nota: 9 },
];

const arrayBecas = [
  { id: 2, beca: true },
  { id: 5, beca: false },
];

const id = 1;

//* FUNCIONES *//

const getAlumnos = (id, cb) => {
  let alumno = arrayAlumnos.find((item) => item.id == id)?.nombre;
  if (!alumno) {
    cb(`El alumno con id ${id} no existe`, null);
  } else {
    cb(null, alumno);
  }
};

const getNotas = (id, cb) => {
  let nota = arrayNotas.find((item) => item.id == id)?.nota;
  if (!nota) {
    cb(`El alumno no tiene nota`, null);
  } else {
    cb(null, nota);
  }
};

const getBecas = (id, cb) => {
  let beca = arrayBecas.find((item) => item.id == id)?.beca;
  if (beca == undefined) { //! no funcionaba porque ya el if estaba recogiendo el false (!beca) y tanto si no tenía beca (undefined) como si era false (id=5)
    cb(`Al alumno no le corresponde solicitar beca`, null);
  } else {
    cb(null, beca);
  }
};

//* Invocaciones *//

getAlumnos(id, (error, alumno) => {
  if (error != null) {
    console.log(error);
  } else {
    getNotas(id, (error, nota) => {
      if (error) {
        console.log(error);
      } else {
        getBecas(id, (error, beca) => {
          if (error) {
            console.log(error);
          } else if(beca == false) {
            console.log(`${alumno} no entregó la documentación y, por ende, no le corresponde la beca.`);
          } else {
            console.log(`${alumno}, que sacó ${nota} de nota, sí le concedieron la beca.`)
          }
        });
      }
    });
  }
});

//*************** ****************//

//* cb (callback) ==> convencionalismo

//******* */

//const sumar = (num1, num2, cb) => {

//let total = num1 + num 2;

//cb(total)

//}

//sumar(2, 3, (total)=>{console.log(total)}
