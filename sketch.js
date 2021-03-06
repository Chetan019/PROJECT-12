
var RunnerImg, pathImg, path, left_boundary, right_boundary, bombImg, coinImg, energydrinkImg;
function preload(){
  //pre-load images
 
  pathImg= loadImage("path.png");
  RunnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
  coinImg= loadImage("coin.png");
  bombImg= loadImage("bomb.png");
  energydrink= loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path= createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y= path.height/30;
  Runner= createSprite(180, 340, 80, 80);
  Runner.addAnimation("running", RunnerImg);
  Runner.scale = 0.09
  coin=createSprite(200, 100, 80, 80);
  coin.scale = 0.5
  coin. addImage(coinImg);
  left_boundary=createSprite(0, 300, 100, 600);
  right_boundary=createSprite(390, 300, 80, 600);
  left_boundary.visible=false;
  right_boundary.visible=false;


}

function draw() {
  background(0);
path.velocityY= 5;
Runner.x=World.mouseX;
if (path.y>400){
  path.y=height/2;

 
}
edges= createEdgeSprites();
 Runner.collide(edges);
drawSprites();

}



