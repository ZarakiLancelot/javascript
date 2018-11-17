function filtrarPorLetra(heroes, letra) {
    let nuevoArreglo = [];

    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i][0] == letra.toLowerCase() || heroes[i][0] == letra.toUpperCase()) {
            nuevoArreglo.push(heroes[i]);
        }
    }

    return nuevoArreglo;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = filtrarPorLetra(heroes, 'h');
console.log(heroesCon);