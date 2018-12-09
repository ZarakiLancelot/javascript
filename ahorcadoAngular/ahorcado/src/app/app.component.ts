import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  palabra = 'AGUACATE';
  palabraOculta = '';
  intentos = 0;
  ganar = false;
  perder = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letra) {
    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGanador();
  }

  verificaGanador() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.ganar = true;
      // console.log('GANASTE!');
    }

    if (this.intentos >= 9) {
      this.perder = true;
      // console.log('PERDISTE!');
    }
  }

  existeLetra(letra) {
    if (this.palabra.indexOf( letra ) >= 0) {
      // console.log(letra + ' se encuentra en la palabra');
    } else {
      this.intentos++;
      // console.log(letra + ' NO se encuentra en la palabra');
    }
  }
}
