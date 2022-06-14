
//Computer picks choice
function computerPlay(option){
    let x = Math.floor(Math.random() * 3);
    
    if (x == 0){
        option = 'rock'
    } else if (x == 1){
        option = 'paper'
    } else { 
        option = 'scissors'
    }

    return option;
    
}



function playRound(playerSelection, computerSelection){
let result;
   switch(playerSelection){
    case 'rock' : {
        if(computerSelection == 'rock'){
            result = "Its a draw";
            break;
            
        }else if (computerSelection == 'paper'){
            result = "You Lose!";
            break;
        }else{
            result = ("You Win!");
            break;

        }
    }
    case 'paper' : {
        if(computerSelection == 'paper'){
            result = "Its a draw";
            break;
            
        }else if (computerSelection == 'scissors'){
            result = "You Lose!";
            break;
        }else{
            result = "You Win!";
            break;

        }
       
    }
    case 'scissors' : {
        if(computerSelection == 'scissors'){
            result = "Its a draw";
            break;
            
        }else if (computerSelection == 'rock'){
            result = "You Lose!";
            break;
        }else{
            result = "You Win!";
            break;

        }
   
   }   
   default:
    result = "Please check spelling";
   
}
return result;
}


function game(){
    let winCount = 0;
    
    let result;
    for (let i = 0; i < 5; i++){
        //play game
        playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
        
        computerSelection = computerPlay();

        let wld = playRound(playerSelection, computerSelection);
        console.log(wld);

        //win loss draw tracker
        

        if(wld == "You Win!"){
            winCount++;
        }
      



}
if(winCount >= 3){
    return "Congrats you won";
}else{
    return "you lose";
}
}

game();