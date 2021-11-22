const selections = ['Rock', 'Paper', 'Scissors']

let playerScore = 0;
let computerScore = 0;
let tieScore = 0; 

const rockBtn = document.querySelector('.rockBtn')
const paperBtn = document.querySelector('.paperBtn')
const scissorBtn = document.querySelector('.scissorBtn')
const restartBtn = document.querySelector('.restartBtn')

const playerScore_p = document.getElementById('playerScore');
const computerScore_p = document.getElementById('computerScore');
const tieScore_p = document.getElementById('tieScore');



function computerSelection() {
    return selections[Math.floor(Math.random() * selections.length)];

}



function playerWin() {
    playerScore++;
    playerScore_p.innerHTML = playerScore;
}  
   
function computerWin() {
    computerScore++;
    computerScore_p.innerHTML = computerScore;
    
}   




function tie() {
    tieScore++
    tieScore_p.innerHTML = tieScore;
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tie(playerScore, computerScore);
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        
        playerWin(playerScore, computerScore);
    
    }
    else if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')

    
    ) {
        computerWin(playerScore, computerScore);
         
    }
}



function restartGame() {
    playerScore = 0
    computerScore = 0
    tieScore = 0
    playerScore_p.innerHTML = playerScore;
    computerScore_p.innerHTML = computerScore;
    tieScore_p.innerHTML = tieScore;
}




// UI

rockBtn.addEventListener('click', () => {
    playerSelection = 'Rock' 
    playRound(playerSelection, computerSelection());
    
})

paperBtn.addEventListener('click', () => {
    playerSelection = 'Paper' 
    playRound(playerSelection, computerSelection());
    
})

scissorBtn.addEventListener('click', () => {
    playerSelection = 'Scissors' 
    playRound(playerSelection, computerSelection());
    
})

restartBtn.addEventListener('click', () => {
    restartGame();
})

