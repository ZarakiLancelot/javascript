function describirPersona(p) {
    console.log(p.nombre + ' tiene ' + p.edad + ' años y mide ' + p.estatura);
}

let persona = {
    nombre: 'Edwin',
    apellido: 'Vásquez',
    edad: 35,
    estatura: 1.68
}

describirPersona(persona);