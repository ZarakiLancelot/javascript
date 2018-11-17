const kg = 2.2046;

let libras = 168;

let kilogramos = libras / kg;
kilogramos *= 100;
kilogramos = Math.round(kilogramos);
kilogramos /= 100;

console.log(kilogramos);