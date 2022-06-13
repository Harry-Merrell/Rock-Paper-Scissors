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
console.log(computerPlay(2));
