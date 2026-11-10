class caballo {

  constructor() {
    this.posX= 50
    this.tama= 50
    this.posY=50
    this.cuadroCorre = 0;
    this.cuadroSalto = 0;
    this.saltando = false;
    this.alturaSalto = 0;
    this.velocidadSalto = 20;
  }
   dibujarCaballo() {
    
    if (this.saltando) {

this.alturaSalto += this.velocidadSalto;

  if (this.alturaSalto >= 100) {
    this.alturaSalto = 100;
    this.velocidadSalto = -20;
  }

  if (this.alturaSalto > 50 && this.velocidadSalto > 0) {
    this.cuadroSalto = 3;
  }

  if (this.velocidadSalto < 0) {
    this.cuadroSalto = 4;

    if (this.alturaSalto < 60) {
      this.cuadroSalto = 5;
    }

    if (this.alturaSalto < 30) {
      this.cuadroSalto = 6;
    }
  }

  image(caballoSalta[this.cuadroSalto], this.posX, 200 - this.alturaSalto, 200, 150);

  if (this.alturaSalto <= 0 && this.velocidadSalto < 0) {
    this.alturaSalto = 0;
    this.velocidadSalto = 20;
   this. saltando = false;
    this.cuadroSalto = 0;
  }

} else {
    image(caballoCorre[this.cuadroCorre], this.posX, 200, 200, 150);

    this.cuadroCorre++;

    if (this.cuadroCorre >= 6) {
      this.cuadroCorre = 0;
    }
  }

  }
  saltar() {
       if (keyCode === UP_ARROW && !this.saltando) {
    this.saltando = true;
    this.bajando = false;
    this.alturaSalto = 0;
    this.velocidadSalto = 20;
    this.cuadroSalto = 0;
  }
  }
}
