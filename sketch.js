var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage,red,blueBalloon;
var arrow,green,pink
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
   redBalloonsGroup=new Group()
   ArrowsGroup=new Group()
   bluesGroup=new Group()
   greensGroup=new Group()
   pinksGroup=new Group()
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  if (keyDown("space")) {
    createArrow()
  }
   // release arrow when space key is pressed
  if (ArrowsGroup.isTouching(red)){
    red.visible=false
   score=score+1
  }
  if (ArrowsGroup.isTouching(blueBalloon)){
    blueBalloon.visible=false
    score=score+1
  }
  if (ArrowsGroup.isTouching(green)){
    green.visible=false
    score=score+1
  }
  if (ArrowsGroup.isTouching(pink)){
    pink.visible=false
    score=score+1
  }
    
  drawSprites();
  text("Score: "+ score, 300,50);
  redBalloon()
  spawnblueBalloon()
  spawngreenBalloon()
  spawnpinkBalloon()
}


// Creating  arrows for bow
 function createArrow() {
   if (keyDown("space")) {
     
   
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  ArrowsGroup.add(arrow)
}
 }
function redBalloon() {
  if (frameCount % 60  ===0) {
    
  red=createSprite(80,41,20,20)
     
   red.addImage(red_balloonImage)
   red.scale=0.1
   
   red.velocityX=4
   
   red.y=Math.round(random(2,300))
  red.lifetime = 150;
  redBalloonsGroup.add(red)
}
}


function  spawnblueBalloon() {
  if (frameCount % 60  ===0) {
    
    blueBalloon=createSprite(70,91,20,20)
     
   blueBalloon.addImage(blue_balloonImage)
   blueBalloon.scale=0.1
   
   blueBalloon.velocityX=4
   
   blueBalloon.y=Math.round(random(2,300))
   blueBalloon.lifetime = 150;
   bluesGroup.add(blueBalloon)
}
}

function spawngreenBalloon() {
  if (frameCount % 60  ===0) {
    
   green=createSprite(100,61,20,20)
     
   green.addImage(green_balloonImage)
   green.scale=0.1
   
   green.velocityX=4
   
   green.y=Math.round(random(2,300))
  green.lifetime = 150;
  greensGroup.add(green)
  }
}

function spawnpinkBalloon() {
  if (frameCount % 60  ===0) {
    
   pink=createSprite(90,41,20,20)
      
    pink.addImage(pink_balloonImage)
    pink.scale=1.2
    pink.velocityX=4
    
    pink.y=Math.round(random(2,300))
    pink.lifetime = 150;
    pinksGroup.add(pink)
   }

}
