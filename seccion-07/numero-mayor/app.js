let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let mayor = numeros[0];

for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] >= mayor) {
        mayor = numeros[i];
    }
}

console.log('El mayor es: ' + mayor);