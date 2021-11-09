let gameChoices = ['Rock', 'Paper', 'Scissors']

let playerSelection = prompt('Rock, Paper, Scissors?');

let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Its a tie')
    }
        else if (
            (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock')
        )
            console.log('Player has won')
            
        
            else (
                (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
                (computerSelection ==='Scissors' && playerSelection === 'Paper') ||
                (computerSelection === 'Paper' && playerSelection === 'Rock')
            )
                console.log('Computer has won')
            
            }



