
function main()
{
 // to display player later
 let player=document.querySelector("#current-player") 


let checkWin = false ;


 // common array to check for winners
 let winningArray = [ 
 [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
 [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
 [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
 [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
 [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
 [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
 [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
 [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
 [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
 [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
 [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
 [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
 [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
 [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
 [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
 [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
 [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
 [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
 [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
 [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
 [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
 [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
 [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
 ]; 
 
 // to track the player
 let currentPlayer=1 
 
 let IDArray = [42];
 
 
 
     // to display player 
     player.innerHTML= "player 1" ;
     // gitting all the cells on board
     let squares =document.querySelectorAll(".cell ") 
      //adding event listener to every cell
     for(let i = 0 ;i < squares.length; i++){
      squares[i].addEventListener("click",switchPlayer);
      //squares[i].addEventListener("click",gitID(this.id));
      
    
     }
     
 
 



        // to switch between players roles
     function switchPlayer(){ 
         
        let playerCill =document.querySelectorAll(".board div")
       let elem ; 

        let id =parseInt(this.id) ;
        
       

        if(   checkWin === false && playerCill[id+7].classList.contains("taken")&& !playerCill[id].classList.contains("taken" )){

            console.log(checkWin);
         if(currentPlayer===1 ){ 
         currentPlayer=2 ;
         player.innerHTML="Player 2";
         
         this.className="player-one taken " ;
         
         PlaySound();
 
         
         winning();
         
         
         }else if(currentPlayer===2){ 
         currentPlayer=1 ;
         player.innerHTML="Player 1" ;
        
         this.className="player-two  taken" ;
         
         PlaySound();
 
         
        winning();
        

         } 
         
        }
  
    } 

     
 
 
     // to clear cells whenever reset button is clicked
     function restCells(){
       
        location.reload();
     }
     
     $(".reset").on('click', restCells); 
 
 // sound 
     function PlaySound(){
         var audio = new Audio("coins.wav");
         audio.play();
     }
 
 // sound 
 function PlaySound2(){
     var audio = new Audio("congrats.flac");
     audio.play();
 }
 
 
 
     function winning(){
         let gameCells =document.querySelectorAll(".board div")
 
 
 
         for (let y=0;y<winningArray.length;y++){
         let Cell =winningArray[y]
 
         if(Cell.every(win=>gameCells[win].classList.contains("player-one"))){

              checkWin = true;
               $("#winner").html("Player 1 ").css("color" , "blue");
               PlaySound2();
              
               
            
           
           } 
           else if(Cell.every(win=>gameCells[win].classList.contains("player-two"))){
           
            checkWin = true;
             $("#winner").html("Player 2 ").css("color" , "blue");
             PlaySound2();
            
            
         }
         }
         }
             
        } 
        main();