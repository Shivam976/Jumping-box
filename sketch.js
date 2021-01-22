var canvas;
var music;
var ground1,ground2,ground3,ground4;
var box;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces

ground1=createSprite(710,height-30,180,40)
ground1.shapeColor=("red")
ground2=createSprite(90,570,180,40)
ground2.shapeColor=("green")
ground3=createSprite(295,570,180,40)
ground3.shapeColor=("blue")
ground4=createSprite(505,570,180,40)
ground4.shapeColor=("yellow")
    //create box sprite and give velocity
box=createSprite(random(20,750),60,60,60)
box.shapeColor=("white")
box.velocityY=8
box.velocityX=5

}

function draw() {
    
    background(rgb(169,169,169));
    
    //create edgeSprite
    createEdgeSprites

    if(box.isTouching(ground1)){
        box.bounceOff(ground1)
        box.shapeColor=("red")
        
    }
    if(box.isTouching(ground2)){
        box.bounceOff(ground2)
        box.shapeColor=("green")
    }
if(box.isTouching(ground3)){
    box.bounceOff(ground3)
    box.shapeColor=("blue")
}
if(box.isTouching(ground4)){
    box.collide(ground4)
    box.shapeColor=("yellow")
    box.velocityX=0;
    box.velocityY=0;
    music.play();
    
}



 

drawSprites();
    //add condition to check if box touching surface and make it box
    
}
