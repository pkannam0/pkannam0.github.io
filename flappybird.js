var cvs = document.getElementById("canvas");  
var ctx = cvs.getContext("2d"); 
  
   
 
var bird = new Image();  
var bg = new Image();  
var fg = new Image();  
var pipeNorth = new Image();  
var pipeSouth = new Image();
bird.src = "Images/bird.png";  
bg.src = "Images/pipeNorth.png"; 
/* 
fg.src = "./Images/fg.png";  
pipeNorth.src = "./Images/pipeNorth.png";  
pipeSouth.src = "./Images/pipeSouth.png";*/  
  
var gap = 85;  
var constant;  
  
var bX = 10;  
var bY = 150;  
  
var gravity = 1.5;  
  
var score = 0;  
  
var fly = new Audio();  
var scor = new Audio();  
  
fly.src = "sounds/fly.mp3";  
scor.src = "sounds/score.mp3";  
  
document.addEventListener("keydown",moveUp);  
  
function moveUp(){  
    bY -= 25;  
    fly.play();  
}  
  
var pipe = [];  
  
pipe[0] = {  
    x : cvs.width,  
    y : 0  
};  
  
function draw(){  
      
    ctx.drawImage(bg,0,0);  
      
      
    for(var i = 0; i < pipe.length; i++){  
          
        constant = pipeNorth.height+gap;  
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);  
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);  
               
        pipe[i].x--;  
          
        if( pipe[i].x == 125 ){  
            pipe.push({  
                x : cvs.width,  
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height  
            });   
        }  
          
        if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >=  cvs.height - fg.height){  
            location.reload();
        }  
          
        if(pipe[i].x == 5){  
            score++;  
            scor.play();  
        }  
          
          
    }  
  
    ctx.drawImage(fg,0,cvs.height - fg.height);  
      
    ctx.drawImage(bird,bX,bY);  
      
    bY += gravity;  
      
    ctx.fillStyle = "#000";  
    ctx.font = "20px Verdana";  
    ctx.fillText("Score : " + score, 10, cvs.height - 20);  
      
    requestAnimationFrame(draw);  
      
}  
  
draw();  
 
