var spr1,spr2,spr3,spr4,spr5,spr6,spr7,spr8,spr9,spr10,spr11,plr;


function preload(){

}

function setup(){
spr1=createSprite(5,5,10,350)
spr2=createSprite(40,390,10,450)
spr3=createSprite(85,5,10,700)
spr4=createSprite(120,390,10,350)
spr5=createSprite(160,200,10,100)
spr6=createSprite(185,400,10,100)
spr7=createSprite(200,10,10,600)
spr8=createSprite(250,490,10,700)
spr9=createSprite(280,10,10,720)
spr10=createSprite(310,490,10,800)
spr11=createSprite(360,10,10,600)
plr=createSprite(20,380,20,20)


}

function draw(){
createCanvas(400,400)
background("pink")



drawSprites();
}

function keyPressed(){
    if(keyCode===38){
        plr.velocityY=-1
    }
    if(keyCode===40){
        plr.velocityY=1
    }

    if(keyCode===39){
        plr.velocityX=1
    }

    if(keyCode===37){
        plr.velocityX=-1
    }

}