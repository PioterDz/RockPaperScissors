'use strict'

var output = document.getElementById('output');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var rock = document.getElementById('rock');
var newGame = document.getElementById('new-game');
var playerResult = document.getElementById('player-score');
var computerResult = document.getElementById('computer-score');
var maxRounds;
var currentRound = 0;
var playerScore = 0;
var computerScore = 0;
var playerChoice;
var computerChoice;
var winner;

function gameInit() {
    maxRounds = prompt('How many rounds you want to play?');
    alert('Choose the paper, scissors or rock');
    console.log('new game ' + maxRounds);
    returnValueOfClickedButton();
}
newGame.addEventListener('click', gameInit);

function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(playerChoice, computerChoice) {
    playerScore++;
    currentRound++;
    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore;
    output.innerHTML = 'You played ' + playerChoice + ' and computer played ' + computerChoice + '. You won this round.'
    console.log('win');
    console.log(currentRound);
}
function lose(playerChoice, computerChoice) {
    computerScore++;
    currentRound++;
    computerResult.innerHTML = computerScore;
    playerResult.innerHTML = playerScore;
    output.innerHTML = 'You played ' + playerChoice + ' and computer played ' + computerChoice + '. You lost this round.'
    console.log('lose');
    console.log(currentRound);
}
function draw(playerChoice, computerChoice) {
    currentRound++;
    output.innerHTML = 'You played ' + playerChoice + ' and computer also played ' + computerChoice + '. Its a draw.'
    console.log('draw');
    console.log(currentRound);
}

function compareBothChoices(playerChoice) {
    checkRounds();
    computerChoice = getComputerChoice();
    switch(playerChoice + ' ' + computerChoice) {
        case 'rock scissors':
        case 'paper rock':
        case 'scissors paper':
            win(playerChoice, computerChoice);
            break;
        case 'rock paper':
        case 'paper scissors':
        case 'scissors rock':
            lose(playerChoice, computerChoice);
            break;
        case 'rock rock':
        case 'paper paper':
        case 'scissors scissors':
            draw(playerChoice, computerChoice);
            break;
    }
}

function returnValueOfClickedButton() {
    rock.addEventListener('click', function(){
        compareBothChoices('rock');
    })
    scissors.addEventListener('click', function(){
        compareBothChoices('scissors');
    })
    paper.addEventListener('click', function(){
        compareBothChoices('paper');
    })
}

function checkRounds() {
    if (currentRound >= maxRounds) {
        gameOver();
    }
}

function gameOver() {
    whoWinner();
    document.write('Game Over.' + winner);
}

function whoWinner() {
    if (playerScore > computerScore) {
        winner = 'You win';
    }
    else if (playerScore < computerScore) {
        winner = 'Computer wins';
    }
    else if (playerScore === computerScore) {
        winner = 'Its draw';
    }
    return winner;
}


