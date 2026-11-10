class cactus {

  constructor() {
    this.posX = 800
    this.ancho = 160;
    this.alto = 100;
    this.posY = 300
    this.vel = 15
  }

  dibujarCactus() {
    fill(0, 255, 0);
    
    image(planta,this.posX, this.posY, this.ancho, this.alto);
  }

  movercactus() {

    this.posX -= this.vel;

    if (this.posX < -this.ancho) {
      this.reiniciarCactus();
    }
  }

  reiniciarCactus() {
    this.posX = 800
    this.posY = 300
    this.ancho = 160;
    this.alto = 100;
    this.vel = random(15, 45);
  }
}
