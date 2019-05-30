'use strict'

var output = document.getElementById('output');
var newGame = document.getElementById('new-game');
var playerResult = document.getElementById('player-score');
var computerResult = document.getElementById('computer-score');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var rock = document.getElementById('rock');

var computerChoice;
var winner;
var choices = ['rock', 'paper', 'scissors'];
var playerMoveClass = document.querySelectorAll('.player-move');
var playerChoiceOne;
var playerChoiceAll = [];

var params = {
    'currentRound': 0,
    'playerScore': 0,
    'computerScore': 0,
    'maxRounds': 0,
    'progress': []
};
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
    params.maxRounds = prompt('How many rounds you want to play?');
    if (typeof params.maxRounds == null || typeof params.maxRounds == undefined || params.maxRounds == '0' || params.maxRounds.charAt(0) == '-') {

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
    params.playerScore++;
    params.currentRound++;
    playerResult.innerHTML = params.playerScore;
    computerResult.innerHTML = params.computerScore;
    output.innerHTML = 'You played ' + playerChoiceAll + ' and computer played ' + computerChoice + '. You won this round.';

}
function lose(playerChoiceAll, computerChoice) {
    params.computerScore++;
    params.currentRound++;
    computerResult.innerHTML = params.computerScore;
    playerResult.innerHTML = params.playerScore;
    output.innerHTML = 'You played ' + playerChoiceAll + ' and computer played ' + computerChoice + '. You lost this round.'

}
function draw(playerChoiceAll, computerChoice) {
    params.currentRound++;
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
    if (params.currentRound == params.maxRounds) {

        gameOver();
    }
}

function gameOver() {
    whoWinner();
    changeElementsVisibility('none', [rock, paper, scissors]);
    endGameModal.style.display = "block";
}

function whoWinner(winner) {
    if (params.playerScore > params.computerScore) {
        winner = 'You win';
    }
    else if (params.playerScore < params.computerScore) {
        winner = 'Computer wins';
    }
    else if (params.playerScore === params.computerScore) {
        winner = 'Its draw';
    }
    endGameResult.innerHTML = 'Game over, its ' + params.playerScore + ' to ' + params.computerScore + '. ' + winner;
}

function resetGame() {
    params.playerScore = 0;
    params.computerScore = 0;
    params.currentRound = 0;
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

