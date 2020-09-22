var wall,thickness;
var bullet,speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
  speed=random(225,300);
  weight=random(35,50);
  thickness = random(22,83);
  wall=createSprite(1200, 200, thickness,height/2);
}

function draw() {
  hasCollided();
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
     damage=0.5 * weight * speed *speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet, lwall) {
      bulletRightEdge=lbullet.x +lbullet.width;
      wallLeftEdge=lwall.x;
      if(bulletRightEdge>=wallLeftEdge){
      return true;
      }
      return false;
}