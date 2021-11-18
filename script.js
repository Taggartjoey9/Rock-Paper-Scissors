const selections = ['Rock', 'Paper', 'Scissors']

let playerScore = 0
let computerScore = 0
let tieScore = 0 

const rockBtn = document.querySelector('.rockBtn')
const paperBtn = document.querySelector('.paperBtn')
const scissorBtn = document.querySelector('.scissorBtn')


function computerSelection() {
    return selections[Math.floor(Math.random() * selections.length)];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
         tieScore++
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        playerScore++
        
    
    }
    else if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')

    ) {
        computerScore++
         
    }
}

// UI

rockBtn.addEventListener('click', () => {
    playerSelection = 'Rock' 
    playRound(playerSelection, computerSelection());
    console.log(playerScore, computerScore, tieScore);
    
})

paperBtn.addEventListener('click', () => {
    playerSelection = 'Paper' 
    playRound(playerSelection, computerSelection());
    console.log(playerScore, computerScore, tieScore);
    
})

scissorBtn.addEventListener('click', () => {
    playerSelection = 'Scissors' 
    playRound(playerSelection, computerSelection());
    console.log(playerScore, computerScore, tieScore);
    
})