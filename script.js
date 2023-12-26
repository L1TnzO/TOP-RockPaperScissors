function getComputerChoice (){
    const options = ['rock', 'scissors','paper'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};


function playRound (playerChoice, computerChoice) {
    switch (playerChoice.toLowerCase() +'-'+ computerChoice) {
        case 'rock-scissors':
        case 'scissors-paper':
        case 'paper-rock':
            return 'player';
        case 'rock-paper':
        case 'scissors-rock':
        case 'paper-scissors':
            return 'computer';
        default:
            return 'draw';
    }
};

const playerChoice = "rock";

function game () {
    let playerCounter = 0;
    let computerCounter = 0;
    let drawCounter = 0;
    let result;
    for (let i = 0; i<5; i++){
        result = playRound (playerChoice, getComputerChoice());
        if (result == 'player'){
            playerCounter += 1;
        }
        else if (result == 'computer'){
            computerCounter += 1;
        }
        else{
            drawCounter += 1;
        }
    }
    if (playerCounter < computerCounter){return 'computer wins'}
    else if (playerCounter > computerCounter){return 'player wins'}
    else {return 'is draw'}
};

console.log(game());
