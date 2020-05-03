var wall;
var bullet;
var speed,weight;
var deformation;
var thickness;

function setup() {

createCanvas(1500,400);

speed=random(223,321);
weight=random(30,52);
thickness=random(22,93);

wall= createSprite(1300, 200, thickness, 200);
wall.shapeColor="grey";

bullet=createSprite(50,200,15,10);
bullet.velocityX=speed/10;
bullet.shapeColor ="white";

}

function draw() {
 
damage=(0.5*weight*speed*speed/(thickness*thickness*thickness));

Collide(wall,bullet)

background("black");  
drawSprites();

}

function Collide(obj1,obj2){

if( obj1.x-obj2.x < obj1.width/2 + obj2.width/2) {
  obj2.velocityX=0*obj2.velocityX;

  if(damage<10){
    wall.shapeColor="green";
  }
      
  if(damage>10){
    wall.shapeColor="red";
  }
    
}

} 
