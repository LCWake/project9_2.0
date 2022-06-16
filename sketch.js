var box;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var insideWall1;
var insideWall2;
var insideWall3;
var insideWall4;
var insideWall5;
var insideWall6;
var insideWall7;
var insideWall8;
var insideWall9;
var insideWall10;
var insideWall11;
var insideWall12;
var insideWall13;
var insideWall14;
var insideWall15;
var insideWall16;
var insideWall17;
var insideWall18;
var insideWall19;
var score = 0
var lives = 5
var deaths = 0
var heart 

function setup() {
  createCanvas(800,800);
  box = createSprite(400,25,25,25);
  wall1 = createSprite(400, 0, 800, 10);
  wall2 = createSprite(0, 400, 10, 800);
  wall3 = createSprite(400, 800, 800, 10);
  wall4 = createSprite(800, 400, 10, 800);
  wall5 = createSprite(400, 750, 800, 5)
  insideWall1 = createSprite(400, 50, 400, 5);
  insideWall2 = createSprite(150, 100, 300, 5);
  insideWall3 = createSprite(650, 100, 300, 5);
  insideWall4 = createSprite(400, 150, 400, 5);
  insideWall5 = createSprite(150, 200, 300, 5);
  insideWall6 = createSprite(650, 200, 300, 5)
  insideWall7 = createSprite(400, 250, 400, 5)
  insideWall8 = createSprite(150, 300, 300, 5)
  insideWall9 = createSprite(650, 300, 300, 5)
  insideWall10 = createSprite(400, 350, 400, 5)
  insideWall11 = createSprite(150, 400, 300, 5)
  insideWall12 = createSprite(650, 400, 300, 5)
  insideWall13 = createSprite(400, 450, 400, 5)
  insideWall14 = createSprite(150, 500, 300, 5)
  insideWall15 = createSprite(650, 500, 300, 5)
  insideWall16 = createSprite(400, 550, 400, 5)
  insideWall17 = createSprite(150, 600, 300, 5)
  insideWall18 = createSprite(650, 600, 300, 5)
  insideWall19 = createSprite(400, 650, 400, 5)
  heart = createSprite(650, 85, 25, 25)
}



function draw() 
{
  background(10);
  box.velocityY = 10
  box.collide(insideWall1)
  box.collide(insideWall2)
  box.collide(insideWall3)
  box.collide(insideWall4)
  box.collide(insideWall5)
  box.collide(insideWall6)
  box.collide(insideWall7)
  box.collide(insideWall8)
  box.collide(insideWall9)
  box.collide(insideWall10)
  box.collide(insideWall11)
  box.collide(insideWall12)
  box.collide(insideWall13)
  box.collide(insideWall14)
  box.collide(insideWall15)
  box.collide(insideWall16)
  box.collide(insideWall17)
  box.collide(insideWall18)
  box.collide(insideWall19)

  textSize(30)
  
  if (box.isTouching(heart)) {
    lives = lives + 1
  }

  if(score < 10){
  text ("Score: "+score, 50, 775)
  text ("lives: "+lives, 200, 775)
  text ("deaths: "+deaths, 350, 775)
}else{
  text("You win!!", 400, 775)
}
if(box.isTouching(wall4)){
  lives = lives -1
  box.x = 400
  box.y = 25
  deaths = deaths + 1
}

if(box.isTouching(wall2)){
  lives = lives -1
  box.x = 400
  box.y = 25
  deaths = deaths + 1
}

  if (keyIsDown(LEFT_ARROW)) {box.x = box.x -15}

  if (keyIsDown(RIGHT_ARROW)) {box.x = box.x +15}

  if(score === 1) {
    box.shapeColor = "red"
  }

  if(score === 2) {
    box.shapeColor = "#ff8900"
  }

  if(score === 3) {
    box.shapeColor = "#FFEB00"
  }

  if(score === 4) {
    box.shapeColor = "green"
  }

  if(score === 5) {
    box.shapeColor = "blue"
  }

  if(score === 6) {
    box.shapeColor = "purple"
  }

  if(score === 7) {
    box.shapeColor = "#00ff9d"
  }

  if(score === 8) {
    box.shapeColor = "indigo"
  }

  
  if(score === 9) {
    box.shapeColor = "#8323FF"
  }

  if(score === 10) {
    box.shapeColor = "#652CAE"
  }

  if (box.isTouching(wall5)) {
     score = score + 1
     box.x = 400
     box.y = 25
    }



 
  
  drawSprites();
}




