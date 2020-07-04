/*
    -bird
    -obstacles
    -move bird
    -timer
    -rect(background)
    
    
    */
    var keyword = 'flappy bird';

    function ImagesTouching(thing1, thing2) {
     if (!thing1.visible  || !thing2.visible) return false;         
     if (thing1.x >= thing2.x + thing2.MyImg.width || thing1.x + thing1.MyImg.width <= thing2.x) return false;  
     if (thing1.y >= thing2.y + thing2.MyImg.height || thing1.y + thing1.MyImg.height <= thing2.y) return false;
     return true;                                                                                            
     }

    function Game(){
        
        this.ctx = canvas.getContext('2d')
        this.scale = 20;
        this.nx = Math.floor(canvas.width/this.scale);
        this.ny = Math.floor(canvas.height/this.scale);
        this.Rect = function(x, y, w, h, fs){
            this.ctx.fillStyle = "blue";
            this.ctx.fillRect(x*this.scale, y*this.scale, w*this.scale - 1, h*this.scale - 1);
    
};
    }
draw = function(){

this.draw = function(){
       this.Rect(0,0, this.nx, this.ny, 'yellow')
}

window.onload = function () {
    new Game();
    }

}
