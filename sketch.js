var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImage

var music

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImage = loadImage("images/fairyImage1.png")
    music = loadSound("sound/JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound


	//create fairy sprite and add animation for fairy
    fairy = createSprite(100,500)
	fairy.addImage(fairyImage)
	fairy.scale = 0.3

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  music.play()
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  keyPressed()
  //write code to stop star in the hand of fairy
  if (star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true)
  }


//write code to move fairy left and right
	if(keyDown("RIGHT_ARROW")){
	fairy.x = fairy.x + 4 }


 	if(keyDown("LEFT_ARROW")){
	fairy.x = fairy.x - 4}

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}


}
