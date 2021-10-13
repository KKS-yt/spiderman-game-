var spiderman
var DrOct
var web






function preload(){}
 function setup(){
   createCanvas(displayWidth,displayHeight);
  spiderman=createSprite(displayWidth/2,displayHeight/2,50,50);
  
  
 }
 function draw(){
   background("white");
  // x=Math.random(0,displayWidth);
  // y=Math.random(0,displayHeight);
  // DrOct=createSprite(x,y,50,50);
  
  // web.x=spiderman.x
  // web.y=spiderman.y
   if(keyDown("LEFT_ARROW")){
     spiderman.x=spiderman.x-5
   }

   if(keyDown("RIGHT_ARROW")){
     spiderman.x=spiderman.x+5
   }

   if(keyWentDown("space")){
    web=createSprite(230,320,10,10);
    web.x=spiderman.x
    web.y=spiderman.y
     web.velocityX=10
     
   }
  







   drawSprites();
  
  }
