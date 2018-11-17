function imprimirTabla(base, limite) {
    for (let index = 1; index <= limite; index++) {
        let resultado = base * index;
        console.log(base + ' x ' + index + ' = ' + resultado);
    }
    console.log(' ');
}

let tablaCuatro = imprimirTabla(4, 10);
let tablaCinco = imprimirTabla(5, 10);