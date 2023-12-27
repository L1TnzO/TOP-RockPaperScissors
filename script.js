function getComputerChoice (){
    const options = ['rock', 'scissors','paper'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};


function playRound (playerChoice, computerChoice) {
    choiceVisualization.textContent = playerChoice+' v/s '+ computerChoice;
    switch (playerChoice.toLowerCase() +'-'+ computerChoice) {
        case 'rock-scissors':
        case 'scissors-paper':
        case 'paper-rock':
            roundInfo.textContent = 'Player wins round!';
            return 'player';
        case 'rock-paper':
        case 'scissors-rock':
        case 'paper-scissors':
            roundInfo.textContent = 'Computer wins round!';
            return 'computer';
        default:
            roundInfo.textContent = 'Draw round!';
            return 'draw';
        
    }
};

let playerCounter = 0;
let computerCounter = 0;

function game (result) {
    if (result == 'player'){
        playerCounter++;
    }
    else{
        computerCounter++;
    }
    scoreInfo.textContent = 'Player: '+playerCounter+' | Computer: '+computerCounter;
    if (playerCounter == 5){
        roundInfo.textContent = 'Game ended! Player wins'};
    if (computerCounter == 5){
        roundInfo.textContent = 'Game ended! Computer wins'};
};

//references buttons
const rockBtn = document.querySelector('[data-action="rock"]');
const paperBtn = document.querySelector('[data-action="paper"]');
const scissorsBtn = document.querySelector('[data-action="scissors"]');

//references containers
const btnContainer = document.querySelector('.button-container')
const bodyContainer = document.querySelector('.body-container');

//create nodes

const choiceVisualization = document.createElement('h3');
const roundInfo = document.createElement('h3');
const scoreInfo = document.createElement('h4');

//append nodes
bodyContainer.append(choiceVisualization,roundInfo,scoreInfo)

btnContainer.addEventListener('click', (e)=>{
    let target = e.target;
    if (playerCounter==5 || computerCounter==5){return;}
    if (target.tagName == 'BUTTON'){
        result = playRound(target.getAttribute('data-action'), getComputerChoice ());
        game(result);
    }
})

