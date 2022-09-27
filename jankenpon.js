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
            loseCount++;
            return 'You Lose! Paper beats Rock';
        case 'rockscissors':
            winCount++;
            return 'You Win! Rock beats scissors';
        case 'paperrock':
            winCount++;
            return 'You Win! Paper beats Rock';
        case 'paperpaper':
            return 'Draw! Paper and Paper';
        case 'paperscissors':
            loseCount++;
            return 'You Lose! Scissors beat Paper';
        case 'scissorsrock':
            loseCount++;
            return 'You Lose! Rock beats Scissors';
        case 'scissorspaper':
            winCount++;
            return 'You Win! Scissors beat Paper';
        case 'scissorsscissors':
            return 'Draw! Scissors and Scissors'
    }
}

let winCount = 0;
let loseCount = 0;

const count = document.createElement('p');
const container = document.querySelector('.container');
const kekka = document.createElement('p');

function kekkaHappyou() {
    if (winCount >= 5) {
        kekka.textContent = 'YOU WON!!!';
        container.appendChild(kekka);
        doGame = 0;
    }
    if (loseCount >= 5) {
        kekka.textContent = 'YOU LOSE!!!';
        container.appendChild(kekka);
        doGame = 0;
    }
}

let doGame = 1;

const gu = document.querySelector('.rock');
gu.addEventListener('click', () => {
    if (doGame) {
        const div = document.createElement('p');
        div.textContent = playRound('rock', getComputerChoice());
        document.body.appendChild(div);
        count.textContent = `Wins: ${winCount}   Losses: ${loseCount}`;
        container.appendChild(count);
        kekkaHappyou();
    } 
})
const pa = document.querySelector('.paper');
pa.addEventListener('click', () => {
    if (doGame) {
        const div = document.createElement('p');
        div.textContent = playRound('paper', getComputerChoice());
        document.body.appendChild(div);
        count.textContent = `Wins: ${winCount}   Losses: ${loseCount}`;
        container.appendChild(count);
        kekkaHappyou();
    }
})
const choki = document.querySelector('.scissors');
choki.addEventListener('click', () => {
    if (doGame) {
        const div = document.createElement('p');
        div.textContent = playRound('scissors', getComputerChoice());
        document.body.appendChild(div);
        count.textContent = `Wins: ${winCount}   Losses: ${loseCount}`;
        container.appendChild(count);
        kekkaHappyou();
    }
})

getComputerChoice()