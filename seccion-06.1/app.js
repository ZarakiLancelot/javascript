let personaUno = {
    nombre: 'María Alejandra',
    edad: 9
};

let personaDos = {
    nombre: 'María José',
    edad: 7
};

let personaTres = {
    nombre: 'María André',
    edad: 5
};

let personas = [personaUno, personaDos, personaTres];

for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre + ' -- ' + personas[i].edad);
}