var trampoline,trampolineImg;
var boy,boyBody,boyImg;
var ground;
var gameover,gameoverImg;


function preload(){
	trampolineImg = loadImage("trampoline.jpg");
	boyImg = loadImage("boy.png");
	gameoverImg = loadImage("gameover.jpg");
}

function setup(){
	createCanvas(displayHeight,displayWidth);
	trampoline = createSprite(displayWidth-710,displayHeight-260);
	trampoline.addImage(trampolineImg);
	trampoline.scale = 0.3;
	trampoline.debug = true;
	boy = createSprite(displayWidth-710,displayHeight-400);
    boy.addImage(boyImg);
	boy.scale = 0.5;
	boy.debug = true;
	ground = createSprite(displayWidth-710,displayHeight-210,1200,10);
	ground.shapeColor = 'black';
	ground.visible = false;
	
	
}

function draw(){
background(255);


	edges = createEdgeSprites();
	trampoline.bounceOff(edges);
	boy.bounceOff(edges);
	boy.bounceOff(trampoline);
	
	boy.velocityY = boy.velocityY + 0.8

	if (boy.collide(ground)){
    boy.visible = false
	trampoline.visible = false
	gameover = createSprite(displayWidth-990,displayHeight-200);
	gameover.addImage(gameoverImg);


	}

	drawSprites();
	}

function keyPressed(){
	if (keyCode === RIGHT_ARROW) {
		trampoline.velocityX = 10;
}

if (keyCode === LEFT_ARROW) {
	trampoline.velocityX = -10;
}

if(keyDown("SPACE")&& boy.y >= 100) {
	boy.velocityY = -12;
	
}
}