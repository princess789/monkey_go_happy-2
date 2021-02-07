var monkey, monkey_running, monkey_collided;
var bananaImage;
var stoneImage;
var obstaclegroup;
var background;
var score;
var ground, invisibleGround, groundImage;
var BananaGroup ;
var Stone;
score=0;

 

function preload(){
  monkey_running = loadAnimation("Monkey_01.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
    backImage = loadImage("jungle.jpg");
 bananaImage = loadImage("banana.png");
 stoneImage = loadImage("stone.png");
  
}

function setup() {
  createCanvas(600, 400);
  
  
  ground = createSprite(400,40,800,10);
  ground.addImage("ground",backImage);
  ground.scale = 1.5;
  ground.x=ground.width /2;
  
  monkey = createSprite(200,400,50,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  
  invisibleGround = createSprite(400,400,800,10);
  invisibleGround.visible = false;
  
  obstacleGroup = new Group();
  BananaGroup  = new Group();
  
  stroke("black");
textSize(25);
fill("black");
}




function draw() {
background(220);
  
 ground.velocityX = -4;
  //move the ground
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
    //console.log(monkey.y);
    //jump when the space key is pressed
    if(keyDown("space")){
      monkey.velocityY = -10 ; 
    }
    //console.log(Banana.y);
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
      monkey.collide(invisibleGround); 
  
  BanaGroup ();
  obstacle ();
  if(obstacleGroup.isTouching(monkey)){
     monkey.scale = 0.1;
     
   }
  
  if (BananaGroup.isTouching(monkey)){
    BananaGroup.destroyEach();
    score=score+5;
  }    
   
   drawSprites();
text("Score:"+ score, 300, 300);
  switch(score){
    case 10:monkey.scale=0.12;
      break;
    case 20:monkey.scale=0.14;
          break;
    case 30:monkey.scale=0.16;
             break;
    case 40:monkey.scale=0.18;
                  break;
    case 50:monkey.scale=0.20;
                    default: break;
                              }                

}

function BanaGroup (){
 
   //write code here to spawn the clouds
  if (frameCount % 100 === 0){
    banana= createSprite(600,1500,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(10,60))
    banana.scale = 0.1;
    banana.velocityX = -6;
    
    
    //assigning lifetime to the variable
    banana.lifetime = 400/6
    
    //adjust the depth
   banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
    
    BananaGroup.add(banana)
    }

    
  
}  
  
function obstacle (){
                                    
    //write code here to spawn the clouds
  
 if (frameCount % 300 === 0){
    Stone= createSprite(600,390,40,10);
    Stone.addImage(stoneImage)
    //Stone.x = Math.round(random(1,6))
    Stone.scale = 0.5;
   Stone.velocityX = -10;
    //assigning lifetime to the variable
    Stone.lifetime = 100
    //adjust the depth
  Stone.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
   obstacleGroup.add(Stone);
 
   
}
}