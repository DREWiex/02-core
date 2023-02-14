const positivos= document.getElementById('positivos');
const negativos= document.getElementById('negativos');
const pares= document.getElementById('pares');
let notas = [];
        let contpos = 0;
        let contneg = 0;
        let contpar = 0;
        let totalNums = 10;
        function solicitarNumeros() { //
            for (let i = 0; i <= totalNums; i++) {
                let nota = parseInt(prompt(`Escribe el número ${i + 1}:`));
                notas.push(validar(nota))
            }
        };
        function validar(valor = 'g') {
            while (isNaN(valor)) {
                valor = parseInt(prompt(`Número no válido, vuelve a escribir el número`));
            }
            operar(valor)
            return valor
        }
        // function operar() {
        //     for (let i = 0; i <totalNums; i++) {
        //         if (notas[i] % 2 == 0) {
        //             contpar++;
        //         }
        //         if (notas[i] > 0) {
        //             contpos++;
        //         } else if (notas[i] < 0) {
        //             contneg++;
        //         }
        //     }
        // }
        // function operar() {
        //     let i=0
        //     while(i<notas.length){
        //         if (notas[i] % 2 == 0) {
        //             contpar++;
        //         }
        //         if (notas[i] > 0) {
        //             contpos++;
        //         } else if (notas[i] < 0) {
        //             contneg++;
        //         }
        //         i++
        //     }
        // }
        function operar(valor) {
            if (valor % 2 == 0) {
                contpar++;
            }
            if (valor > 0) {
                contpos++;
            } else if (valor < 0) {
                contneg++;
            }
        }
        function escribir() {
            positivos.innerText = contpos + ' número/s positivo/s';
            negativos.innerText = contneg + ' número/s negativo/s';
            pares.innerText = contpar + ' número/s par/es'
        };
        function ejer1() {
            solicitarNumeros()
            escribir()
        }