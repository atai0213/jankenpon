function getComputerChoice() {
    switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
        return 'rock';
    case 2:
        return 'paper';
    case 3: 
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let merge = playerSelection.toLowerCase().trim() + computerSelection;
    switch (merge) {
        case 'rockrock':
            return 'Draw! Rock and Rock';
        case 'rockpaper':
            return 'You Lose! Paper beats Rock';
        case 'rockscissors':
            return 'You Win! Rock beats scissors';
        case 'paperrock':
            return 'You Win! Paper beats Rock';
        case 'paperpaper':
            return 'Draw! Paper and Paper';
        case 'paperscissors':
            return 'You Lose! Scissors beat Paper';
        case 'scissorsrock':
            return 'You Lose! Rock beats Scissors';
        case 'scissorspaper':
            return 'You Win! Scissors beat Paper';
        case 'scissorsscissors':
            return 'Draw! Scissors and Scissors'
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

getComputerChoice()