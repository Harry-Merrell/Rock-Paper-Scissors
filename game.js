
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
//prompt player for choice
let playerSelection = prompt("Rock, Paper, Scissors?");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);
let computerSelection;
computerSelection = computerPlay();
console.log(computerSelection)


function playRound(playerSelection, computerSelection){
let result;
   switch(playerSelection){
    case 'rock' : {
        if(computerSelection == 'rock'){
            result = ("Its a draw");
            break;
            
        }else if (computerSelection == 'paper'){
            result = ("You Lose!")
            break;
        }else{
            result = console.log("You Win!");
            break;

        }
    }
    case 'paper' : {
        if(computerSelection == 'paper'){
            result = ("Its a draw");
            break;
            
        }else if (computerSelection == 'scissors'){
            result = ("You Lose!")
            break;
        }else{
            result = console.log("You Win!");
            break;

        }
       
    }
    case 'scissors' : {
        if(computerSelection == 'scissors'){
            result = ("Its a draw");
            break;
            
        }else if (computerSelection == 'rock'){
            result = ("You Lose!")
            break;
        }else{
            result = console.log("You Win!");
            break;

        }
   
   }   
   default:
    result = "Please check spelling"
   
}
return result;
}

console.log(playRound(playerSelection, computerSelection));

