var cvs = document.getElementById("canvas");  
var ctx = cvs.getContext("2d"); 


  
   
 
var bird = new Image();  
var pipeNorth = new Image();  
var pipeSouth = new Image();
var color = 'blue';
bird.src = "Images/bird.png";
pipeNorth.src = "Images/pipeNorth.png"; 
pipeSouth.src = "Images/pipeSouth.png";   
var gap = 400;  
var constant;  
  
var bX = 10;  
var bY = 150;  
  
var gravity = 1.5;  
  
var score = 0; 

document.addEventListener("keydown",moveLeft);
 
function moveLeft(){  
    bY -= 25;  
     
}  
  
var pipe = [];  
  
pipe[0] = {  
    x : cvs.width,  
    y : 0  
};  
  
function draw(){  
      
      
      
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
          
          
        if(pipe[i].x == 5){  
            score++;    
        }  
        else{score--};
          
          
    }  
   
      
    ctx.drawImage(bird,bX,bY);  
      
    bY += gravity;  
      
    ctx.fillStyle = "#000";  
    ctx.font = "20px Verdana";  
    ctx.fillText("Score : " + score, 10, cvs.height - 20);  
      
    requestAnimationFrame(draw);  
      
}  
  
draw();  
 
