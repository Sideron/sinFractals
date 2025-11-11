let bullets = []
let index = 0
let counter = 0
let dir = 0
let lastBullet = null

function setup() {
 createCanvas(800, 800);
}

function createBullet(dirX,dirY,nextBullet){
 bullets[index] = new Bullet(400,400,dirX,dirY,nextBullet);
 index++
 return bullets[index-1]
}

function destroyLastBullet(){
 if (bullets.length > 0) {
  bullets.shift();
 }
}

function draw() {
 background(0);
 counter+=0.002
 dir+=counter
 lastBullet =createBullet(sin(dir)*5,cos(dir)*5,lastBullet)
 bullets.forEach(x => {x.move()})
 bullets.forEach(x => {x.draw()})
  destroyLastBullet();
}

function Bullet(x,y,dirX,dirY,nextBullet){
 this.x = x
 this.y = y
 this.dirX = dirX
 this.dirY = dirY
 this.speed = 0.9
 this.nextBullet = nextBullet

 this.move = function(){
  this.x+=dirX*this.speed
  this.y+=dirY*this.speed
 }

 this.draw = function(){
  //circle(this.x,this.y,8)
   stroke("white")
   if(nextBullet !== null){
     line(this.x,this.y,nextBullet.x,nextBullet.y)
   }
 }

}
