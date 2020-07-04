function Food(){
    this.x = 3;
    this.y = 4;
    this.draw = function(game){
      game.Rect(this.x, this.y, 1, 1, 'red')
    };
  
    this.reset = function(game){
      this.x = Math.floor(Math.random()*game.nx);
      this.y = Math.floor(Math.random()*game.ny);
    };
  
  }
  function Snake(){
    this.x = 10;
    this.y = 10;
    this.vx = 1;
    this.vy = 0;
    this.l = 2;
    this.trace = [];
    this.step = function(game){
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
  
      if(this.x >= game.nx) this.x = 0;
      if(this.y >= game.ny) this.y = 0;
      if(this.x < 0) this.x = game.nx - 1;
      if(this.y < 0) this.y = game.ny - 1;
  
  
      for(var i=0; i<this.trace.length; i++){
        var pos = this.trace [i];
        if(pos.x == game.food.x && pos.y == game.food.y){
          this.l = this.l + 1;
          game.food.reset(game); 
          
        }
  
        if(pos.x == this.x && pos.y == this.y) this.l = 2;
  
      } 
  
  
      this.trace.push({x:this.x, y:this.y});
      while(this.trace.length > this.l) this.trace.shift();
  };
    this.draw = function (game){
      for(var i=0; i<this.trace.length; i++){
        var pos = this.trace[i];
        game.Rect(pos.x, pos.y, 1, 1, 'green');
      }
    };
      
    this.keydown = function(key){
      if(key == 'ArrowUp'){
        this.vx = 0;
        this.vy = -1;
      }
      if(key == 'ArrowLeft'){
        this.vx = -1;
        this.vy = 0;
      }
      if(key == 'ArrowRight'){
        this.vx = 1;
        this.vy = 0;
      }
      if(key == 'ArrowDown'){
        this.vx = 0;
        this.vy = 1;
      }
   };
  }
  function Game(){
  
      this.ctx = canvas.getContext('2d')
      this.scale = 20;
      this.nx = Math.floor(canvas.width/this.scale);
      this.ny = Math.floor(canvas.height/this.scale);
  
      this.food = new Food();
      this.snake = new Snake();
      
      this.Rect = function(x, y, w, h, fs){
       this.ctx.fillStyle = fs;
       this.ctx.fillRect(x*this.scale, y*this.scale, w*this.scale - 1, h*this.scale - 1);
  };
     
      this.draw = function(){
         this.Rect(0,0, this.nx, this.ny, 'yellow');
         this.food.draw(this);
         this.snake.draw(this);
      };
      this.step = function(){
        this.snake.step(this);
        this.draw();
        this.wait()  
    };
    this.wait = function(){
    setTimeout(this.step.bind(this), 1225/25);
   };
  
    this.keydown = function(evt){
      this.snake.keydown(evt.key);
    };
  
    document.addEventListener('keydown', this.keydown.bind(this));
    this.wait();
  }
  