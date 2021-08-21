class Game {

    constructor() {
      this.PlayButton = createButton('PLay')
      this.PlayButton.size(60,40)
      this.PlayButton.style('background-color', 'aqua');

      this.LeftArrow = createButton('Left')
      this.LeftArrow.size(60,40)
      this.LeftArrow.style('background-color', 'aqua');

      this.RightArrow = createButton('Right')
      this.RightArrow.size(60,40)
      this.RightArrow.style('background-color', 'aqua');

      this.FireButton = createButton('Fire')
      this.FireButton.size(60,40)
      this.FireButton.style('background-color', 'aqua');

      this.JumpButton = createButton('JUMP')
      this.JumpButton.size(60,40)
      this.JumpButton.style('background-color', 'aqua');

      this.LeftArrow.hide();
      this.RightArrow.hide();
      this.FireButton.hide();
      this.JumpButton.hide();
      }
      hide(){

      }
  
  
      display(){
             
        this.PlayButton.position(windowWidth/2,windowHeight/2);
         this.LeftArrow.position(windowWidth/17,windowHeight/1.4)
         this.RightArrow.position(windowWidth/7,windowHeight/1.4)
         this.JumpButton.position(windowWidth/1.2,windowHeight/1.4)
         this.FireButton.position(windowWidth/1.1,windowHeight/2)
        this.PlayButton.mousePressed(()=>{
            GameState = 1
            startsound.play()
            this.PlayButton.hide()
           });
  
      if(GameState === 1){
        this.LeftArrow.show();
        this.RightArrow.show();
        this.JumpButton.show();


      
      
      
      
      }


      if(Point>9){
        this.FireButton.show();
        if(Point>9){
          this.FireButton.mousePressed(()=>{
            if(Direction === "RIGHT"){
              createBall();
            }
            if(Direction === "LEFT"){
              createBall2();
            }
        }) 
        }
      }else{
        this.FireButton.hide();
      }

 


    
      if(Point>9){
          this.LeftArrow.mousePressed(()=>{
             Goku.x -= 25+25;
        
              Goku.changeImage("Gokusleft",GokuImg4)
            
            Direction = "LEFT"
          })
          this.RightArrow.mousePressed(()=>{
             Goku.x += 25+25;
         
              Goku.changeImage("Gokusright",GokuImg)
          
              Direction = "RIGHT"
          })
         }
         else{

          this.LeftArrow.mousePressed(()=>{
              Goku.x -= 20+20;
        
              Goku.changeImage("Gokuleftwalk",GokuImg3);
            
            Direction = "LEFT"
          })

          this.RightArrow.mousePressed(()=>{
              Goku.x += 20+20;
         
              Goku.changeImage("Gokurightwalk",GokuImg2);
          
              Direction = "RIGHT"
          })

        
         }


         if(Point>9){ 
         
          this.JumpButton.mousePressed(()=>{
              if(Goku.y >= Ground.y-100){
                  Goku.velocityY = -25;
              }
              
          })
            Goku.velocityY = Goku.velocityY + 1.2
           
        }
        else
        {
          this.JumpButton.mousePressed(()=>{
              if(Goku.y >= Ground.y-100){
                  Goku.velocityY = -25;
              }
              
          })
            Goku.velocityY = Goku.velocityY + 1.2
           
        }

  
      
     
  
  
  
  
       
  
  
  
    
      }
    
    
    
    
    
    }
  