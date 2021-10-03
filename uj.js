//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife,fruit ,monster,fruitGroup,monsterGroup, score,r,randomFruit, position;
var knifeImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage;
var gameOverSound ,knifeSwoosh;

function preload(){
  
  knifeImage = loadImage("knife.png");
  monsterImage = loadAnimation("alien1.png","alien2.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png")
  
  gameOverSound = loadSound("gameover.mp3")
  knifeSwooshSound = loadSound("knifeSwoosh.mp3")
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  // Score variables and Groups
  score=0;
  fruitGroup=createGroup();
  monsterGroup=createGroup();
  
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //Call fruits and Monster function
    fruits();
    Monster();
    
    // Move sword with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if sword touching fruit
    if(fruitGroup.isTouching(knife)){
      fruitGroup.destroyEach();
      
      // knifeSwooshSound.play();
      // knifeSwooshSound.play;
      // knifeSwooshSound();
      // knifeSwooshSoundplay();


      // score=score;
      // score=+2;
      // score=2;
      // score=score+2;

    }
    else
    {
      // Go to end state if sword touching enemy
      if(monsterGroup.isTouching(knife)){
        gameState=END;
        //gameover sound
        gameOverSound.play()
        
        fruitGroup.destroyEach();
        monsterGroup.destroyEach();
        fruitGroup.setVelocityXEach(0);
        monsterGroup.setVelocityXEach(0);
        
        // Change the animation of sword to gameover and reset its position
        knife.addImage(gameOverImage);
        knife.scale=2;
        knife.x=300;
        knife.y=300;
      }
    }
  }
  
  drawSprites();
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}


function Monster(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.y=Math.round(random(100,550));
    monster.velocityX=-(8+(score/10));
    monster.setLifetime=50;
    
    monsterGroup.add(monster);
  }
}

function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.x = 0    
  //Increase the velocity of fruit after score 4 

      // fruit.velocityX= (7+(score/4));
      // fruit.velocityY= (7+(score));
      // fruit.velocity= (7+(score/4));
      // fruit.velocityX= (7);
     
    fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,550));
   
    
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
  var sword, swordImage, enemyG, enemyImage, fruit1, fruit2,
    fruit3, banana, fruitG, fruit1Image, fruit2Image, fruit3Image, fruit4Image, score,gameOverImage;
var PLAY=1
var END=0
var gameState=PLAY
var fruitGroup;
var enemyG;
var gameOverSound, knifeSwooshSound;



function preload(){
  swordImage= loadImage("sword.png");
  enemyImage=loadAnimation("alien1.png","alien2.png")
  fruit1Image=loadImage("fruit1.png");
  fruit2Image=loadImage("fruit2.png");
  fruit3Image=loadImage("fruit3.png");
  bananaImage=loadImage("banana.png");
  gameOverImage=loadImage("gameover.png");
  gameOverSound = loadSound ("gameover.mp3");
  knifeSwooshSound = loadSound ("knifeSwooshSound.mp3");
 
}

function setup(){
  createCanvas(600, 600);
  
  sword=createSprite(200,200,100,100)
  sword.addImage(swordImage)
  sword.scale=1;
  
  
  
  
  fruitGroup = createGroup();
  enemyGroup= createGroup();
  score=0;
  
}

function draw(){
background("skyblue")
  
    if (gameState===PLAY) {
      sword.x=World.mouseX;
      sword.y=World.mouseY;
      fruits();
      enemy();
  
      if (fruitGroup.isTouching(sword)){
        fruitGroup.destroyEach();
        score=score+1
        knifeSwooshSound.play()
      }
    
      else{
        
       if(sword.isTouching(enemyGroup)) {
      enemyGroup.destroyEach()
      gameState=END;
      gameOverSound.play();
      fruitGroup.destroyEach()
      enemyGroup.setVelocityXEach(0)
      fruitGroup.setVelocityXEach(0)
      sword.addImage(gameOverImage)
      sword.scale=2
      sword.x=300
      sword.y=200
     
    }
     
    if (gameState===END){
       fruitGroup.setLifetimeEach(0);
       enemyGroup.setLifetimeEach(0);
     
     fruitGroup.setVelocityXEach(0);
     enemyGroup.setVelocityXEach(0); 
    }
      } 
    }
  

  drawSprites();
  
 text("Score: "+ score, 500,50);
  
}
  

function fruits (){
  
  if (World.frameCount%80===0){
    position = Math.round(random(1,2));
    fruit=createSprite(400,200,20,20);
    console.log(position);
    
    if(position==1){
      fruit.x=400;
      fruit.velocityX=-(7+(score/4));
    } 
    else 
    {
      if (position==2){
        fruit.x=0;
        fruit.velocityX= (7+(score/4));
      }
    }
      
       fruit.scale=0.2;
      var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1Image);
              break;
      case 2: fruit.addImage(fruit2Image);
              break;
      case 3: fruit.addImage(fruit3Image);
              break;
      case 4: fruit.addImage(bananaImage);
              break;
      default: break;
    }
    fruit.y=Math.round(random(50,340));
  
    fruit.setLifetime=100;
    fruitGroup.add(fruit);
    }

  //fruit.velocityX =-6;
  
}

function enemy(){
if (World.frameCount%100===0){
 var enemy=createSprite(600,Math.round(random(30,400)),10,10)
  
 enemy.addAnimation("enemy_blinking",enemyImage)
  enemy.velocityX=-(8+(score/10));
  enemy.scale=0.75
  enemy.lifetime=150
  enemyGroup.add(enemy)
} 
}

}