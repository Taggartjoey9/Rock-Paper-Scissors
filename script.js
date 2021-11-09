let gameChoices = ['Rock', 'Paper', 'Scissors']

//let playerSelection = prompt('Rock, Paper, Scissors?');

let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        console.log('You have tied, play again')
    }
}