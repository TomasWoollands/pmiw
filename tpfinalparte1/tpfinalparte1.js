let parrafos = [];
let texto;
let miFuente;
let pantalla;
let titulo, intro;
let imagenes = [];

// Botón inicial
let posXBotonI, posYBotonI;

// Botones de la pantalla 
let posXBoton1, posYBoton1;
let posXBoton2, posYBoton2;

let tamXBoton, tamYBoton;


function preload() {

  miFuente = loadFont("data/BroncoPersonalUse.ttf");
  texto = loadStrings("data/1.txt");
  
  titulo = loadImage("data/portadadeprueba.jpeg");
  
  
  for (let i=1; i<11; i++) {
    imagenes[i] = loadImage("data/"+i+".jpeg");
  }
}


function setup() {
   
  createCanvas(800, 450);  
  parrafos = texto.join("\n").split("---");
  textFont(miFuente); 
  imageMode(CENTER, CENTER);

  // BOTÓN INICIAR
  posXBotonI = 350;
  posYBotonI = 350;

  // BOTÓN 1
  posXBoton1 = 250;
  posYBoton1 = 350;

  // BOTÓN 2
  posXBoton2 = 450;
  posYBoton2 = 350;

  tamXBoton = 100;
  tamYBoton = 50;

  pantalla = 0;
}


function draw() {

  background(0);



  // PANTALLA 0  
  if (pantalla == 0) {

    image(titulo, width/2, height/2, width, height);
    

    dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"INICIAR");

  }
  
  // PANTALLA 1 

  else if (pantalla == 1) {

    image(imagenes[1], width/2, height/2, width, height);
   textSize(15);
  textAlign(LEFT, TOP);
 fill(0);
 text(parrafos[0], 50, 50, 700);
 // for (let i = 0; i < texto.length; i++) {
  //  text(texto[1], 20, 25 + i * 25, 750);
//  }

    dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE");   

  }

  
  // PANTALLA 2

  else if (pantalla == 2) {

    background(100);
    
    image(imagenes[2], width/2, height/2, width, height);
   
     dibujarBoton(posXBoton1,posYBoton1,tamXBoton,tamYBoton,"HABLAR");
     dibujarBoton(posXBoton2,posYBoton2,tamXBoton,tamYBoton,"HUIR");
  }
  
  // PANTALLA 3
 
  else if (pantalla == 3) {

    background(150);
    
    image(imagenes[3], width/2, height/2, width, height);
    
    dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE")
    
  }
  
  // PANTALLA  4  (3b) (huir)
  
  else if (pantalla == 4) {

  
image(imagenes[4], width/2, height/2, width, height);
  
   dibujarBoton(posXBoton1,posYBoton1,tamXBoton,tamYBoton,"A PIE");
   dibujarBoton(posXBoton2,posYBoton2,tamXBoton,tamYBoton,"A CABALLO");
 }
 //PANTALLA 5  (4)
 
 else if (pantalla == 5) {

  
image(imagenes[5], width/2, height/2, width, height);
  
 dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE")
 
 
 }
 
 else if (pantalla == 6) {

  
image(imagenes[6], width/2, height/2, width, height);
  
 dibujarBoton(posXBoton1,posYBoton1,tamXBoton + 50,tamYBoton,"MORIR CON HONOR");
 dibujarBoton(posXBoton2,posYBoton2,tamXBoton + 50,tamYBoton,"HACER TRAMPA");
 
 
 }
 else if (pantalla == 7) {

  
image(imagenes[7], width/2, height/2, width, height);
  
 dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE");
 
 
 }
 //PANTALLA 9  (6) primer original
 else if (pantalla == 9) {

  
image(imagenes[8], width/2, height/2, width, height);
  
 dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE");
 
 
 }
 //HISTORIA ALTERNATIVA  (4C)
 
 else if (pantalla == 11) {

  
image(imagenes[9], width/2, height/2, width, height);
  
  dibujarBoton(posXBoton1,posYBoton1,tamXBoton ,tamYBoton,"IZQUIERDA");
  dibujarBoton(posXBoton2,posYBoton2,tamXBoton ,tamYBoton,"DERECHA");
 }
 
 //FINAL ALTERNATIVO (5d)
 
 else if (pantalla == 13) {

  
image(imagenes[10], width/2, height/2, width, height);
  
  dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"CREDITOS");
 }
}


function dibujarBoton(x, y, tamX, tamY, nombre) {

  if (detectarZonaR(x, y, tamX, tamY)) {
    fill(77, 39, 0);

  } else {
    fill(255, 168, 80);

  }

  rect(x, y, tamX, tamY, tamY/4);
  textSize(tamY/2);
  textAlign(CENTER, CENTER);

  fill(255);

  text(nombre, x+tamX/2, y+tamY/2);
}


function detectarZonaR(x, y, tamX, tamY) {

  if (mouseX > x && mouseX < x+tamX && mouseY > y && mouseY < y+tamY) {

    return true;

  } else {

    return false;

  }

}


function mouseClicked() {  
  // BOTÓN INICIAR
  if (pantalla == 0) {

    if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 1;

    }

  }
  
  // BOTONES DE LA PANTALLA 1 

  else if (pantalla == 1) {

    // BOTÓN 1 VA PANTALLA 2
    if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 2;

    }
  }

// PANTALLA 2
else if (pantalla == 2) {

    // BOTÓN 1 VA A LA PANTALLA 3
    if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton, tamYBoton)) {
      pantalla = 3;
    }

    // BOTÓN 2 VA A LA PANTALLA 4
    else if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton, tamYBoton)) {
      pantalla = 4;
    }

  }
else if (pantalla == 3) {
  
  if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 5;

    }
}
else if (pantalla == 5) {
  
  if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 6;

    }
}
else if (pantalla == 6) {

    // BOTÓN 1 VA A LA PANTALLA 7 (5)
    if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton + 50, tamYBoton)) {
      pantalla = 7;
    }

    // BOTÓN 2 VA A LA PANTALLA 8 (5c)
    else if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton + 50 , tamYBoton)) {
      pantalla = 8;
    }

 }
 else if (pantalla == 7) {
  
  if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 9;

    }
 }
 //HISTORIA ALTERNATIVA 
 else if (pantalla == 4) {

    // BOTÓN 1 VA A LA PANTALLA 7 (5)
    if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton + 50, tamYBoton)) {
      pantalla = 10;
    }

    // BOTÓN 2 VA A LA PANTALLA 8 (5c)
    else if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton + 50 , tamYBoton)) {
      pantalla = 11;
    }
}
 else if (pantalla == 11) {

    // BOTÓN 1 VA A LA PANTALLA 12 ()
    if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton + 50, tamYBoton)) {
      pantalla = 12;
    }

    // BOTÓN 2 VA A LA PANTALLA 13 ()
    else if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton + 50 , tamYBoton)) {
      pantalla = 13;
    }
 }

}
