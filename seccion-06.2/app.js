class Carro {
    constructor(marca, tipo, puertas) {
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;

        this.creadoEn = 'hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro() {
        if (!this.encendido) {
            this.encendido = true;
            console.log('El motor del carro ha sido encendido');
        } else {
            console.error('El carro ya estaba encendido');
        }

        return this;
    }

    realizarViaje(consumo) {
        if (!this.encendido) return console.log('El carro está apagado');

        if (consumo > this.gasolina) return console.log('No se puede realizar el viaje porque solo se tiene ' + this.gasolina + ' de gasolina');;

        this.gasolina = this.gasolina - consumo;
        return 'Le queda ' + this.gasolina + ' de gasolina';
    }
}

let miCarro = new Carro('Subaru', 'Sedan', 2);

miCarro.encenderCarro();
miCarro.realizarViaje(100);