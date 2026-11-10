class Principal {

  constructor() {
    
    this.cactus = new cactus();
    this.crearCaballo();
    this.crearFondo();
  }

  dibujar() {
    
    this.fondo.dibujarFondo();
    this.caballo.dibujarCaballo();
    this.cactus.dibujarCactus();
    this.cactus.movercactus();
    
  }

  crearCaballo() {
    this.caballo = new caballo();
  }

  saltar() {
    this.caballo.saltar();
  }

  crearFondo() {
    this.fondo = new escenario();
  }
}
