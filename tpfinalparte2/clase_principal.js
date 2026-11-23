class Principal {

  constructor() {
    this.pantalla = 0;
    this.tiempo = 0;
    this.tiempoTranscurrido = 0;
    this.ave = new ave();
    this.cactus = new cactus();
    this.crearCaballo();
    this.crearFondo();
    this.vidas = 3;
    this.obstaculoActivo = "cactus";
  }

dibujar() {
  if (this.pantalla === 0) {
    this.dibujarInicio();

  } else if (this.pantalla === 1) {
    this.dibujarInstrucciones();

  } else if (this.pantalla === 2) {
    this.tiempoTranscurrido = millis() - this.tiempo;

    if (this.tiempoTranscurrido >= 15000) {
      this.pantalla = 3;
    } else {
      this.dibujarJuego();
    }

  } else if (this.pantalla === 3) {
    this.dibujarVictoria();

  } else if ( this.pantalla === 4) {
    this.dibujarDerrota();
    
  } else if (this.pantalla === 5) {
  this.dibujarCreditos();
}
}

detectarTecla() {

  if (this.pantalla === 2) {
    this.saltar();
  }

}

cambiarObstaculo() {

  if (this.obstaculoActivo === "cactus" && this.cactus.terminoRecorrido()) {

    this.obstaculoActivo = "ave";
    this.ave.reiniciarAve();

  } else if (this.obstaculoActivo === "ave" && this.ave.terminoRecorrido()) {

    this.obstaculoActivo = "cactus";
    this.cactus.reiniciarCactus();

  }
}

  dibujarJuego() {

  this.fondo.dibujarFondo();
  this.caballo.dibujarCaballo();
  

  if (this.obstaculoActivo === "cactus") {

    this.cactus.dibujarCactus();
    this.cactus.movercactus();

  } else if (this.obstaculoActivo === "ave") {

    this.ave.dibujarAve();
    this.ave.moverAve();

  }
  this.cambiarObstaculo();
  this.detectarColision();

  image(corazones[this.vidas], 620, 20, 120, 45);
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
  
  dibujarInicio() {
  this.fondo.dibujarPortada();
  this.fondo.dibujarBoton("INICIAR");
}
dibujarInstrucciones() {
  this.fondo.dibujarInstrucciones();
  this.fondo.dibujarBoton("JUGAR");
}
dibujarVictoria() {
  this.fondo.dibujarVictoria();
   this.fondo.dibujarBoton("creditos");
}

dibujarDerrota() {
  this.fondo.dibujarDerrota();
  this.fondo.dibujarBoton("creditos");
}

dibujarCreditos() {
  image(creditos, 0, 0, width, height);
  
  textFont(miFuente);
  textAlign(CENTER, CENTER);
  textSize(28);
  fill(255);

  text("WOOLLANDS TOMAS", width / 2, 220);
  text("ZUGAZUA UNAI", width / 2, 260);
  this.fondo.dibujarBoton("INICIO");
}

detectarColision() {

  if (this.obstaculoActivo === "cactus") {

    if (this.cactus.colision(this.caballo)) {
      this.vidas--;
      this.cactus.posX = -this.cactus.ancho - 1;
    }

  } else if (this.obstaculoActivo === "ave") {

    if (this.ave.colision(this.caballo)) {
      this.vidas--;
      this.ave.posX = -this.ave.ancho - 1;
    }

  }

  if (this.vidas <= 0) {
    this.pantalla = 4;
  }
}



reiniciarJuego() {

  this.vidas = 3;

  //Reiniciar posición del caballo
  this.caballo = new caballo();

  //Reiniciar cactus
  this.cactus = new cactus();
  
  //Reiniciar ave
  this.ave = new ave();

  //Reiniciar fondo
  this.fondo.fondoX = 0;

  //Reiniciar tiempo
  this.tiempo = 0;
  this.tiempoTranscurrido = 0;

  //Volver a la portada
  this.pantalla = 0;
  
  this.obstaculoActivo = "cactus";
}

detectarClic() {

  if (this.pantalla === 0) {

    if (this.fondo.detectarZonaR()) {
      if (!musica.isPlaying()) {
        musica.amp(0.2);
        musica.play();
      }

      this.pantalla = 1;
      boton.play();
    }

  } else if (this.pantalla === 1) {

    if (this.fondo.detectarZonaR()) {
      this.pantalla = 2;
      this.tiempo = millis();
      boton.play();
    }

  } else if (this.pantalla === 3 || this.pantalla === 4) {

    if (this.fondo.detectarZonaR()) {
      this.pantalla = 5;
      boton.play();
    }

  } else if (this.pantalla === 5) {

    if (this.fondo.detectarZonaR()) {
      this.reiniciarJuego();
      boton.play();
      musica.stop();
    }

  }
}

}
