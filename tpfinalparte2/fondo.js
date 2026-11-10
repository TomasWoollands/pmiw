class escenario {

  constructor() {
    this.fondoX = 0;
  }

  dibujarFondo() {

    image(fondo, this.fondoX, 0, 800, 400);
    image(fondo, this.fondoX + 790, 0, 800, 400);

    this.fondoX -= 40;

    if (this.fondoX <= -800) {
      this.fondoX = 0;
    }

  }

}
