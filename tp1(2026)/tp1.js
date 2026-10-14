let atras, medio, adelante,titulo;
let posXa, posXm, posXad, posY,posYt;
let velA, velM, velAd;

let personaje= [];
let posX, posYp, velX;
let contadorG;
let estado;
let sprite;

let posXBotonI, posYBotonI, tamXBoton, tamYBoton;



function preload() {
  atras=loadImage("data/selva-2.png");
  medio=loadImage("data/lianas.png");
  adelante=loadImage("data/bosque-1.png");
  titulo =loadImage("data/titulo.png");
  
  for (let i=0; i<5; i++) {
    
    personaje[i]=loadImage("data/"+i+".png");
 }
}


function setup() {
  createCanvas(800, 600);
  
  imageMode(CENTER, CENTER);
  posXa=width/2;
  posXm=width/2;
  posXad=width/2;
  posY=height/2;
  velA=1;
  velM=1.5;
  velAd=2;
  
  posYt = -500
  posX=-50;
  posYp=550;
  velX=2;

  contadorG=0;
  estado=0;
  sprite=0;
  
  posXBotonI=350;
  posYBotonI=900;
  tamXBoton=100;
  tamYBoton=50;
  
  
}


function draw() {
  background(0); 
  
  posXa+=velA;
  if (posXa>=width+width/2) {
    posXa=width/2
  }
  image(atras, posXa, posY, width, height);
  image(atras, posXa-width, posY, width, height);

  posXm+=velM;

  if (posXm>=width+width/2) {
    posXm=width/2
  }
  image(medio, posXm, posY, width, height);
  image(medio, posXm-width, posY, width,height);

  posXad+=velAd;
  if (posXad>=width+width/2) {
    posXad=width/2   
  }  
  image(adelante, posXad, posY , width, height);
  image(adelante, posXad-width, posY , width, height);
  
  if (posYt < height/2) {
  posYt += 3;
}

   image(titulo, width/2, posYt);
   

  if(posYBotonI > 480 ){
    posYBotonI -=1;
    
    
  }
  
  
  dibujarBoton(posXBotonI, posYBotonI, tamXBoton, tamYBoton, "reiniciar");
  
  
  contadorG++;
  if (contadorG<50) {
    estado=0;
  } else if (contadorG>50 && contadorG<100) {
    estado=1;
  } else if (contadorG>100) {
    estado=2;
  }
  if (estado===0) {
    sprite=0;
  }
  if (estado===1) {
    posX += velX;
    
    if (frameCount%25<10) {
      sprite=1;
    } else {
      sprite=0;
    }
  }
  if (estado===2) {
  posX += velX;

  if (frameCount%25<10) {
    sprite=2;
  } else {
    sprite=4;
  }
  }
  
  image(personaje[sprite], posX, posYp,100,100);
}


function dibujarBoton(x, y, tamX, tamY, nombre) {
  if (detectarZonaR(x, y, tamX, tamY)) {
    fill(0, 255, 255);
  } else {
    fill(0, 0, 255);
  }
  rect(x, y, tamX, tamY, tamY/4);
  textSize(tamY/3);
  textAlign(CENTER, CENTER);
  fill(255);
  text(nombre, x+tamX/2, y+tamY/2);
  }
function detectarZonaR(x, y, tamX, tamY) {
  if (mouseX>x && mouseX<x+tamX && mouseY>y && mouseY< y+tamY) {
    
    return true;
  } else {
    return false;
  }
}


function reiniciar(){
  posXa=width/2;
  posXm=width/2;
  posXad=width/2;
  posY=height/2;
  velA=1;
  velM=1.5;
  velAd=2;
  
  posYt = -500
  posX=-50;
  posYp=550;
  velX=2;
  contadorA=0;
  contadorG=0;
  estado=0;
  sprite=0;
  
  posYBotonI=900;
} 
 function mouseClicked(){
   if (detectarZonaR(posXBotonI, posYBotonI, tamXBoton, tamYBoton)) {
   reiniciar();
 }
 }
