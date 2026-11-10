let fondo;
let juego;
let caballoCorre = [];
let caballoSalta = [];
let planta;
function preload(){
  fondo = loadImage("data/fondo.png");
  planta =loadImage("data/CACTUS.png");
   for (let i = 0; i < 6; i++) {
    caballoCorre[i] = loadImage("data/correr-" + i + ".png");
  }

  for (let i = 0; i < 7; i++) {
    caballoSalta[i] = loadImage("data/saltar-" + i + ".png");
  }

}

function setup() {
createCanvas(800, 400);

imageMode(CORNER);
  
juego=new Principal();
}


function draw() {
  frameRate(18);
  background(100);
  juego.dibujar();

}

function keyPressed() {
  juego.saltar();
}
