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
var computerChoice;
var winner;
var choices = ['rock', 'paper', 'scissors'];
var playerMoveClass = document.querySelectorAll('.player-move');
var playerChoiceOne;
var playerChoiceAll = [];

//modal
var endGameModal = document.getElementById('end-game-modal');
var playAgainBtn = document.getElementById('play-again');
var endGameResult = document.getElementById('end-game-result');



initialize();


function initialize() {
    changeElementsVisibility('none', [rock, paper, scissors]);
    newGame.addEventListener('click', gameInit);
    modalEventListeners();
}

function findPlayerChoice() {

   for(let i=0 ; i<playerMoveClass.length ; i++) {
        playerChoiceOne = playerMoveClass[i].getAttribute('data-move');
        playerChoiceAll.push(playerChoiceOne);
        playerMove(playerChoiceAll);
    }
    // enableEventListeners(playerChoiceAll);
}

function enableEventListeners(playerChoiceAll) {
    // for(let i=0; i<playerMoveClass.length ; i++) {
    //     console.log(playerChoiceAll[i]+'ffjfj'); 
        // playerMoveClass[i].addEventListener('click', playerMove(playerChoiceAll[i]));
    // }
}

function changeElementsVisibility(state, elements) { 
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = state;
    }
}

function maxRoundsPrompt() {
    maxRounds = prompt('How many rounds you want to play?');
    if (typeof maxRounds == null || typeof maxRounds == undefined || maxRounds == '0' || maxRounds.charAt(0) == '-') {

        alert('Error. Please, write a number greater then 0');
        maxRoundsPrompt();
    }
    else {
        alert('Choose the paper, scissors or rock');
    }

}

function gameInit() {
    resetGame();
    maxRoundsPrompt();
    changeElementsVisibility('none', [newGame]);
    changeElementsVisibility('inline-flex', [rock, paper, scissors]);
    findPlayerChoice();
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(playerChoiceAll, computerChoice) {
    playerScore++;
    currentRound++;
    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore;
    output.innerHTML = 'You played ' + playerChoiceAll + ' and computer played ' + computerChoice + '. You won this round.';

}
function lose(playerChoiceAll, computerChoice) {
    computerScore++;
    currentRound++;
    computerResult.innerHTML = computerScore;
    playerResult.innerHTML = playerScore;
    output.innerHTML = 'You played ' + playerChoiceAll + ' and computer played ' + computerChoice + '. You lost this round.'

}
function draw(playerChoiceAll, computerChoice) {
    currentRound++;
    output.innerHTML = 'You played ' + playerChoiceAll + ' and computer also played ' + computerChoice + '. Its a draw.'

}

function playerMove(playerChoiceAll) {
    console.log(playerChoiceAll); 
    computerChoice = getComputerChoice();
    switch(playerChoiceAll + ' ' + computerChoice) {
        case 'rock scissors':
        case 'paper rock':
        case 'scissors paper':
            win(playerChoiceAll, computerChoice);
            break;
        case 'rock paper':
        case 'paper scissors':
        case 'scissors rock':
            lose(playerChoiceAll, computerChoice);
            break;
        case 'rock rock':
        case 'paper paper':
        case 'scissors scissors':
            draw(playerChoiceAll, computerChoice);
            break;
    }
    checkRounds();
}

function checkRounds() {
    if (currentRound == maxRounds) {

        gameOver();
    }
}

function gameOver() {
    whoWinner();
    changeElementsVisibility('none', [rock, paper, scissors]);
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

    playAgainBtn.addEventListener('click', function() {
        resetGame();
        endGameModal.style.display = "none";
        gameInit();
    })

    document.body.addEventListener('click', function(event) {
        if (event.target == endGameModal) {
            endGameModal.style.display = "none";
        }
    })
}

