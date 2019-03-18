'use strict'

var output = document.getElementById('output');
var newGame = document.getElementById('new-game');
var playerResult = document.getElementById('player-score');
var computerResult = document.getElementById('computer-score');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var rock = document.getElementById('rock');
var maxRounds;
var currentRound = 0;
var playerScore = 0;
var computerScore = 0;
var playerChoice;
var computerChoice;
var winner;
var choices = ['rock', 'paper', 'scissors'];
//modal
var endGameModal = document.getElementById('end-game-modal');
var closeModal = document.getElementById('close-modal');
var playAgainBtn = document.getElementById('play-again');
var quitPageBtn = document.getElementById('quit-page');
var endGameResult = document.getElementById('end-game-result');


newGame.addEventListener('click', gameInit);

function gameEventListeners() {

    rock.addEventListener('click', function(){
        compareBothChoices(choices[0]);
        console.log('event listener');
    })
    paper.addEventListener('click', function(){
        compareBothChoices(choices[1]);
        console.log('event listener');
    })
    scissors.addEventListener('click', function(){
        compareBothChoices(choices[2]);
        console.log('event listener');
    })
}

function maxRoundsPrompt() {
    maxRounds = prompt('How many rounds you want to play?');
    if (typeof maxRounds == null || typeof maxRounds == undefined || maxRounds == '0' || maxRounds.charAt(0) == '-') {
        console.log(maxRounds + 'maxrounds');
        alert('Error. Please, write a number greater then 0');
        maxRoundsPrompt();
    }
    else {
        alert('Choose the paper, scissors or rock');
        gameEventListeners();
    }
    console.log('new game ' + maxRounds);
}

function gameInit() {
    resetGame();
    maxRoundsPrompt();

}

function getComputerChoice() {
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
    checkRounds();
}

function checkRounds() {
    if (currentRound == maxRounds) {
        console.log('game over');
        gameOver();
        modalEventListeners();
    }
}

function gameOver() {
    whoWinner();
    endGameModal.style.display = "block";
}

function whoWinner(winner) {
    if (playerScore > computerScore) {
        winner = 'You win';
    }
    else if (playerScore < computerScore) {
        winner = 'Computer wins';
    }
    else if (playerScore === computerScore) {
        winner = 'Its draw';
    }
    endGameResult.innerHTML = 'Game over, its ' + playerScore + ' to ' + computerScore + '. ' + winner;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;
    output.innerHTML = " ";
    playerResult.innerHTML = " ";
    computerResult.innerHTML = " ";
}
//modal functions
function modalEventListeners() {
    closeModal.addEventListener('click', function() {
        endGameModal.style.display = "none";
    })

    quitPageBtn.addEventListener('click', function() {
        endGameModal.style.display = "none";
    })

    playAgainBtn.addEventListener('click', function() {
        resetGame();
        console.log('reset score' + playerScore + computerScore + currentRound);
        endGameModal.style.display = "none";
        gameInit();
    })

    document.body.addEventListener('click', function(event) {
        if (event.target == endGameModal) {
            endGameModal.style.display = "none";
        }
    })
}

