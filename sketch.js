var garden,rabbit;
var gardenImg,rabbitImg;
var apple,apple_image;
var leaf,leaf_image;
var oleaf,oleaf_image;
var hrabbit,hrabbit_image;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_image = loadImage("apple.png");
  leaf_image =loadImage("leaf.png");
  oleaf_image =loadImage("orangeLeaf.png");
  hrabbit_image=loadImage("hrabbit.png")
}

function setup(){
  
createCanvas(1300,700);
  
// Moving background
garden=createSprite(750,200);
garden.addImage(gardenImg);
garden.scale=3;

hrabbit=createSprite(200,200,30,30)
hrabbit.addImage(hrabbit_image)
hrabbit.visible=false;

applegroup=new Group();
leafgroup=new Group();
oleafgroup=new Group();

//creating boy running
rabbit = createSprite(180,500,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background("green");
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  garden.velocityX=-2;
  if(garden.x<0){
  garden.x=garden.width/2
 }

 if(rabbit.isTouching(applegroup)||
 rabbit.isTouching(leafgroup)||
 rabbit.isTouching(oleafgroup)){
  hrabbit.visible=true;
 }
  
 rabbit.x=mouseX;

 var things=Math.round(random(1,3));
 if (frameCount% 75===0){
  if(things===1){
    leafs();
  }
  else if(things===2){
  apples();
}
  else {
  oleafs();
}
}
  drawSprites();
}

function apples(){
  if(frameCount%75===0){
  apple=createSprite(10,100,20,20);
  apple.addImage("ap",apple_image);
  apple.scale=0.1;
  apple.velocityY=2;
  apple.x=Math.round(random(1,1000));
  apple.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;
  applegroup.add(apple);
}}

function leafs(){
if(frameCount%75===0){
  leaf=createSprite(10,100,5,5);  
  leaf.addImage("le",leaf_image);
  leaf.scale=0.1;
  leaf.velocityY=2;
  leaf.x=Math.round(random(1,1200));
  leaf.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;
  leafgroup.add(leaf);
}}

function oleafs(){
  if(frameCount%75===0){
  oleaf=createSprite(10,100,20,20);
  oleaf.addImage("ol",oleaf_image);
  oleaf.scale=0.1;
  oleaf.velocityY=2;
  oleaf.x=Math.round(random(1,1300));
  oleaf.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1;
  oleafgroup.add(oleaf);
}}


