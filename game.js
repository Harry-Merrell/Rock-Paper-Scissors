//DOM 
//container
const container = document.querySelector('#container');
//Displaying game result in div
const gameResult = document.createElement('div');

gameResult.textContent = "Select";
gameResult.classList.add('default');
container.appendChild(gameResult)

//stats
let winCount = 0;
let gameCount = 0;



const gameStatList = document.getElementById("gameStatList");
var scoreTracker = document.createElement('li');
scoreTracker.textContent = "Win Count: " + winCount + "/" + gameCount;
gameStatList.appendChild(scoreTracker);



let playerSelection;
//Computer picks choice
function computerPlay(option){
    let x = Math.floor(Math.random() * 3);
    if (x === 0){
        option = 'rock'
    } else if (x === 1){
        option = 'paper'
    } else { 
        option = 'scissors'
    }

    return option;
}

//on button press make selection and play round
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playerSelection = 'rock';
    
    playRound();
    
});
const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound();
    
});
const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound();

});

function playRound(){
    let computerSelection = computerPlay();
    let result;

    switch(playerSelection){
     case 'rock' : {
         if(computerSelection == 'rock'){
             result = "Its a draw.";
            gameResult.textContent = result;
            gameResult.classList.remove("default", "win", "loss", "draw")
            gameResult.classList.add("draw")
             break;

             
         }else if (computerSelection == 'paper'){
             result = "You Lose!";
             gameResult.textContent = result;
             gameResult.classList.remove("default", "win", "loss", "draw")
             gameResult.classList.add("loss")
             gameCount++
             scoreTracker.textContent = "Win Count: " + winCount + "/" + gameCount;
             gameStatList.appendChild(scoreTracker);
             break;
         }else{
             result = "You Win!";
             gameResult.textContent = result;
             gameResult.classList.remove("default", "win", "loss", "draw")
             gameResult.classList.add("win")
             winCount++
             gameCount++
             scoreTracker.textContent = "Win Count: " + winCount + "/" + gameCount;
             gameStatList.appendChild(scoreTracker);
             break;
 
         }
     }
     case 'paper' : {
         if(computerSelection == 'paper'){
            result = "Its a draw.";
            console.log("Paper draw triggered")
            gameResult.textContent = result;
            gameResult.classList.remove("default", "win", "loss", "draw")
            gameResult.classList.add("draw")
            break;
             
         }else if (computerSelection == 'scissors'){
            result = "You Lose!";
            gameResult.textContent = result;
            gameResult.classList.remove("default", "win", "loss", "draw")
            gameResult.classList.add("loss")
            gameCount++
            scoreTracker.textContent = "Win Count: " + winCount + "/" + gameCount;
            gameStatList.appendChild(scoreTracker);
            break;
         }else{
            result = "You Win!";
            gameResult.textContent = result;
            gameResult.classList.remove("default", "win", "loss", "draw")
            gameResult.classList.add("win")
            winCount++;
            gameCount++;
            scoreTracker.textContent = "Win Count: " + winCount + "/" + gameCount;
            gameStatList.appendChild(scoreTracker);
            break;
 
         }
        
     }
     case 'scissors' : {
         if(computerSelection == 'scissors'){
            result = "Its a draw.";
            gameResult.textContent = result;
            gameResult.classList.remove("default", "win", "loss", "draw")
            gameResult.classList.add("draw")
            break;
             
         }else if (computerSelection == 'rock'){
            result = "You Lose!";
            gameResult.textContent = result;
            gameResult.classList.remove("default", "win", "loss", "draw")
            gameResult.classList.add("loss")
            gameCount++;
            scoreTracker.textContent = "Win Count: " + winCount + "/" + gameCount;
            gameStatList.appendChild(scoreTracker);
            break;
         }else{
            result = "You Win!";
            gameResult.textContent = result;
            gameResult.classList.remove("default", "win", "loss", "draw");
            gameResult.classList.add("win");
            winCount++;
            gameCount++;
            scoreTracker.textContent = "Win Count: " + winCount + "/" + gameCount;
            gameStatList.appendChild(scoreTracker);
            break;
         }
    
    }   
    
 }
 
 return console.log(result);
 }
 
