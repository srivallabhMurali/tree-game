var player;
function preload(){
    treeImg=loadImage("tree image.jpg");
    playerImg=loadImage("player.jpeg");
    mazeGroup=new Group();
    holeGroup=new Group();

}


function setup(){
createCanvas(600,600);


var maze1 = createSprite(10,70,10,20); 
maze1.shapeColor="yellow";
mazeGroup.add(maze1);

 var maze2 = createSprite(100,50,20,100);
  maze2.shapeColor = "yellow";
  mazeGroup.add(maze1);
  var maze3 = createSprite(80,130,100,20);
  maze3.shapeColor = "yellow";
  mazeGroup.add(maze2);

  var maze4 = createSprite(50,250,20,100);
  maze4.shapeColor = "yellow";
  mazeGroup.add(maze3);

  var maze5 = createSprite(130,210,100,20);
   maze5.shapeColor = "yellow";
   mazeGroup.add(maze4);

  var maze6 = createSprite(10,250,100,20);
   maze6.shapeColor = "yellow";
   mazeGroup.add(maze5);

  var maze7 = createSprite(160,120,20,100);
   maze7.shapeColor = "yellow";
   mazeGroup.add(maze6);

  var maze8 = createSprite(150,20,100,20);
   maze8.shapeColor = "yellow";
   mazeGroup.add(maze7);

  var maze9 = createSprite(250,70,20,100);
   maze9.shapeColor = "yellow";
   mazeGroup.add(maze8);

  var maze10 = createSprite(270,150,100,20);
   maze10.shapeColor = "yellow";
   mazeGroup.add(maze10);

  var maze11 = createSprite(330,50,100,20);
   maze11.shapeColor = "yellow";
   mazeGroup.add(maze11);

  var maze12 = createSprite(340,125,20,100);
   maze12.shapeColor = "yellow";
   mazeGroup.add(maze12);

  var maze13 = createSprite(220,250,20,100);
   maze13.shapeColor = "yellow";
   mazeGroup.add(maze13);

  var maze14 = createSprite(330,210,150,20);
   maze14.shapeColor = "yellow";
   mazeGroup.add(maze14);

  var maze15 = createSprite(100,300,20,100);
   maze15.shapeColor = "yellow";
   mazeGroup.add(maze15);

  var maze16 = createSprite(180,310,100,20);
   maze16.shapeColor = "yellow";
   mazeGroup.add(maze16);

  var maze17 = createSprite(30,352,20,100);
   maze17.shapeColor = "yellow";
   mazeGroup.add(maze17)

  var maze18 = createSprite(175,352,20,100);
   maze18.shapeColor = "yellow";
   mazeGroup.add(maze18)

  var maze19 = createSprite(280,290,20,100);
   maze19.shapeColor = "yellow";
   mazeGroup.add(maze19)

  var maze20 = createSprite(350,270,120,20);
   maze20.shapeColor = "yellow";
   mazeGroup.add(maze20);

  var maze21 = createSprite(250,390,100,20);
   maze21.shapeColor = "yellow";
   mazeGroup.add(maze21);

  var maze22 = createSprite(330,370,20,100);
   maze22.shapeColor = "yellow";
   mazeGroup.add(maze22);



//CREATING HOLES


   var hole1 = createSprite(10,80,20,10);
   hole1.shapeColor = "yellow";
   holeGroup.add(hole1);

   var hole2 = createSprite(210,330,20,10);
   hole2.shapeColor = "blue";
   holeGroup.add(hole2);

   var hole3 = createSprite(360,380,20,10);
   hole3.shapeColor = "red";
   holeGroup.add(hole3);

   var hole4 = createSprite(190,190,20,10);
   hole4.shapeColor = "green";
   holeGroup.add(hole4);

   var hole5 = createSprite(40,50,20,10);
   hole5.shapeColor = "cyan";
   holeGroup.add(hole5);

   var hole6 = createSprite(100,115,20,10);
   hole6.shapeColor = "pink";
   holeGroup.add(hole6);

//CREATING tree

  

   //CREATING player

    player = createSprite(400,400,20,10);
   player.addImage(playerImg);
   player.scale=0.1;


}
function draw(){
    background(255);


    if(keyDown("left_arrow")){
        player.x=player.x-2;
        
    }
    
    if(keyDown("right_arrow")){
        player.x=player.x+2;
        
    }
    if(keyDown("up_arrow")){
        player.y=player.y-2;
        
    }
    if(keyDown("down_arrow")){
        player.y=player.y+2;
        
    }

    player.bounceOff(mazeGroup);
    
    if(holeGroup.isTouching(player)){

        var tree = createSprite(hole1.x,hole1.y,20,10);
        tree.addImage(treeImg);
        tree.scale=0.2;

    }



    drawSprites();
}