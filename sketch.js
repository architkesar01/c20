var fixedrect,movingrect


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 80);
  fixedrect.shapeColor="yellow"
  movingrect = createSprite(300, 200, 80, 50);
  movingrect.shapeColor="yellow"
}

function draw() {
  background(0);
  movingrect.x = mouseX
  movingrect.y = mouseY

if (fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2 &&
  movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2  &&
  movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2  &&
  fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2 ){
    
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
}

else{
  fixedrect.shapeColor="yellow"
  movingrect.shapeColor="yellow"
}


  drawSprites();
}
