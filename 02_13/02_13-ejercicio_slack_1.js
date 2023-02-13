/*
Se solicita al usuario que ingrese por teclado 10 números. El programa devolverá:
1) Cuantos son positivos
2) Cuantos son negativos
3) Cuantos son pares
*/

var num = [];
const repeat = 10;

function solicitarNum(){
    for(let i = 0; i < repeat; i++){
        num[i] = prompt("Indica un número:");
    } //! ¿Cómo puedo hacer la verificación en este paso?
    return num; // ¿Indicamos esto para que nos devuelva el valor de num al final del bucle?
}

console.log(num);

// Ahora lo que necesito es un bucle que recorra el array de la var num para calcular si el elemento es +, - o par
var calcular;
var numNega = [];
var numPosi = [];
var numPares = [];

function calcularNum(){
    //! ¿Cómo relaciono una función con otra?
    for(let i = 0; i > calcular.length; i++){
        if(calcular[i] < 0){
            calcular[i] = numNega;
            console.log(numNega);
            alert(`Los números ${numNega} son negativos.`);
        }else if(calcular[i] >= 0){
            calcular[i] = numPosi;
            console.log(numPosi);
            alert(`Los números ${numPosi} son positivos.`);
        }else if(calcular[i] % 2 == 0){
            num[i] = numPares;
            console.log(numPares)
            alert(`Los números ${numPares} son pares.`);
        }
    }
    return //! ¿Qué variable tengo que indicar?
}