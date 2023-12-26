function getComputerChoice (){
    const options = ['rock', 'scissors','paper'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};


function playRound (playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === computerChoice){
        return 'draw'
    }
    if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors' ||
    playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper' ||
    playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock'){
        return 'player'
    }
    else{
        return 'computer'
    }
};

const playerChoice = "rock";
const computerChoice = getComputerChoice();

function game () {
    
};

console.log(playRound(playerChoice,computerChoice));