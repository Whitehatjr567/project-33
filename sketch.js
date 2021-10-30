const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground1;
var particle;
var divisions = [];
var divisionHeight = 300;
var particles=[particle];
var plinkos = [];

var gameState = "PLAY";

var count = 0;
var score = 0;


function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new Ground(460,750,8800,20);
    /*division1 = new Division(350,750,20,300);
    division2 = new Division(240,750,20,300);
    division3 = new Division(130,750,20,300);*/
   
    static1 = new Plinko(220,480,20);
    static2 = new Plinko(140,480,20);
    static3 = new Plinko(300,480,20);
    static4 = new Plinko(380,480,20);
    static5 = new Plinko(60,480,20);
    static6 = new Plinko(180,400,20);
    static7 = new Plinko(100,400,20);
    static8 = new Plinko(260,400,20);
    static9 = new Plinko(340,400,20);
    static10 = new Plinko(30,400,20);
    static11 = new Plinko(420,400,20);
    division4 = new Division(2,750,20,10000);
    division5 = new Division(470,750,20,10000);

   for(i=0;i<=width;i=i+80){
       divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
   }
   /*for(j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
}
for(j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
}
for(j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
}
for(j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));

}*/




   
    

  

}





function draw() {
    background("black");
    Engine.update(engine);
    textSize(35)
    text("Score : "+score,40,50)
    fill(255);

  textSize(25)
  text("500",20,550)
  text("500",100,550)
  text("200",180,550)
  text("200",260,550)
  text("100",340,550)
  text("100",410,550)

if(gameState=="END"){
  background("white");
  fill("yellow");
  textSize(70);
  text("GAME OVER",240,400)
}


   
  
  
  if(particle!=null){
     
    particle.display();

    if(particle.body.position.y > 650){
      if(particle.body.position.x < 100){
        score = score+500;
        particle=null;
        if(count >= 5) gameState = "END";

      }
      else if(particle.body.position.x < 410 && particle.body.position.x > 340){
        score = score+100;
        particle = null;
        if(count >= 5) gameState = "END";
      }
      else if(particle.body.position.x < 260 && particle.body.position.x > 180){
        score = score+200;
        particle = null;
        if(count >= 5) gameState = "END";

      }


    }
  }
  
  
  
  
  
  drawSprites();
   
    
    for(var k = 0;k < divisions.length; k++){
        divisions[k].display();
       }
       
    /*if(frameCount %60 === 0){
        particles.push(new Particle(random(width/2-30,width/2+30),10,10))
        
    }
    for(var h = 0; h < particles.length; h++){
        particles[h].display();
       }
     
       /*for(var j = 0;j < plinkos.length; j++){
        plinkos[j].display();
      }*/
       
    

    ground1.display();
    /*division1.display();
    division2.display();
    division3.display();*/
   
    static1.display();
    static2.display();
    static3.display();
    static4.display();
    static5.display();
    static6.display();
    static7.display();
    static8.display();
    static9.display();
    static10.display();
    static11.display();
    division4.display();
    division5.display();
    
    
     
        
}


function mousePressed(){
 if(gameState!=="END"){
count++
particle = new Particle(mouseX,50,20);
 }

}



