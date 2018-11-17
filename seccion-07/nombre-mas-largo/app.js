function masLargo(heroes) {
    let nombre = '';
    let mayor = '';

    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].length >= nombre.length) {
            mayor = heroes[i];
        }
    }

    return mayor;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor X', 'Wolverine', 'Capitán América'];
let heroeLargo = masLargo(heroes);
console.log(heroeLargo);