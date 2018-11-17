function determinarNota(alumno, nota) {
    if (nota >= 90 && nota <= 100) {
        notaLetra = 'A';
        console.log('Alumno(a) ' + alumno + ' obutvo una nota de: ' + nota + ' es igual a ' + notaLetra);
    } else if (nota >= 80) {
        notaLetra = 'B';
        console.log('Alumno(a) ' + alumno + ' obutvo una nota de: ' + nota + ' es igual a ' + notaLetra);
    } else if (nota >= 70) {
        notaLetra = 'C';
        console.log('Alumno(a) ' + alumno + ' obutvo una nota de: ' + nota + ' es igual a ' + notaLetra);
    } else if (nota >= 60) {
        notaLetra = 'D';
        console.log('Alumno(a) ' + alumno + ' obutvo una nota de: ' + nota + ' es igual a ' + notaLetra);
    } else {
        notaLetra = 'F';
        console.log('Alumno(a) ' + alumno + ' obutvo una nota de: ' + nota + ' es igual a ' + notaLetra);
    }
}

alumnoUno = determinarNota('Edwin', 100);
alumnoDos = determinarNota('María José', 80);
alumnoTres = determinarNota('María André', 59);