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
            console.log('player');
            return 'player';
        case 'rock-paper':
        case 'scissors-rock':
        case 'paper-scissors':
            console.log('computer');
            return 'computer';
        default:
            console.log('draw');
            return 'draw';
        
    }
};

let playerCounter = 0;
let computerCounter = 0;
let drawCounter = 0;
function game (result) {
    globalThis.playerCounter;
    globalThis.computerCounter;
    globalThis.drawCounter;
    if(playerCounter === 5 || computerCounter === 5 || drawCounter === 5){console.log('el juego termino')}
    if (result == 'player'){
        playerCounter +=1;
    }
    else if (result == 'computer'){
        computerCounter +=1;
    }
    else{
        drawCounter +=1;
    }
    
    if (playerCounter < computerCounter){return 'computer wins'}
    else if (playerCounter > computerCounter){return 'player wins'}
    else {return 'is draw'}
};

//references buttons
const rockBtn = document.querySelector('[data-action="rock"]');
const paperBtn = document.querySelector('[data-action="paper"]');
const scissorsBtn = document.querySelector('[data-action="scissors"]');

//references containers
const btnContainer = document.querySelector('.button-container')
const bodyContainer = document.querySelector('.body-container');

btnContainer.addEventListener('click', (e)=>{
    let target = e.target;
    if (target.tagName == 'BUTTON'){
        result = playRound (target.getAttribute('data-action'), getComputerChoice ());
        game(result);
        console.log(playerCounter)
        
    }
})