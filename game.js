'use strict'

var output = document.getElementById('output');
var result = document.getElementById('result');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var rock = document.getElementById('rock');
var newGame = document.getElementById('new-game');
var playerResult = document.getElementById('player-score');
var computerResult = document.getElementById('computer-score');
var maxRounds = 0;
var currentRound = 0;
var playerScore = 0;
var computerScore = 0;
var playerChoice;
var computerChoice;
var winner;
var computerLotto = Math.round((Math.random() * [2]) + 1);

// buttons
newGame.addEventListener('click', gameInit());
paper.addEventListener('click', playerMove(paper));
rock.addEventListener('click', playerMove(rock));
scissors.addEventListener('click', playerMove(scissors));

// init function 
function gameInit() {
    maxRounds = prompt('How many rounds you want to play?');
    alert('Choose the paper, scissors or rock');
}

// get computer's choice
function getComputerChoice(computerLotto) {
    if (computerLotto == 1) {
        computerChoice === 'paper';
    }
    else if (computerLotto == 2) {
        computerChoice === 'rock';
    }
    else if (computerLotto == 3) {
        computerChoice === 'scissors';
    }
    return computerChoice;
}

// show the result function
function gameResult(playerChoice, computerChoice) {
    result.innerHTML = 'You played ' + playerChoice + 'and computer played ' + computerChoice + '.';
}

// win, lose or tie function
function win(playerChoice, computerChoice) {
    playerScore++;
    currentRound++;
    output.innerHTML = 'You won.' + gameResult(playerChoice, computerChoice);
    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore;
}
function lose(playerChoice, computerChoice) {
    computerScore++;
    currentRound++;
    output.innerHTML = 'You lost.' + gameResult(playerChoice, computerChoice);
    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore;
}
function tie(playerChoice, computerChoice) {
    currentRound++;
    output.innerHTML = 'Tie.' + gameResult(playerChoice, computerChoice);
    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore;
}

// who is the winner?
function whoWinner() {
    if (playerScore > computerScore) {
        winner === 'Player';
    }
    else if (playerScore < computerScore) {
        winner === 'Computer';
    }
    return winner;
}

// game over function
function gameOver() {
    whoWinner();
    document.write('Game Over.' + winner + 'wins.');
    document.write('Click to play again');
    reloadButton = document.createElement('button');
    reloadButton.onClick = location.reload();
}

//game function

function playerMove(playerChoice) {
    getComputerChoice();
    if (maxRounds === currentRound) {
        gameOver();
    }
    else if (playerChoice === computerChoice) {
        tie();
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'paper') {
        win();
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'scissors' && computerChoice === 'rock') {
        lose();
    }
}











