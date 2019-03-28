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
//modal
var endGameModal = document.getElementById('end-game-modal');
var closeModal = document.getElementById('close-modal');
var playAgainBtn = document.getElementById('play-again');
var quitPageBtn = document.getElementById('quit-page');
var endGameResult = document.getElementById('end-game-result');


function gameInit() {
    params.maxRounds = prompt('How many rounds you want to play?');
    alert('Choose the paper, scissors or rock');
    console.log('new game ' + params.maxRounds);
}
newGame.addEventListener('click', gameInit);

function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(playerChoice, computerChoice) {
    params.playerScore++;
    params.currentRound++;
    playerResult.innerHTML = params.playerScore;
    computerResult.innerHTML = params.computerScore;
    output.innerHTML = 'You played ' + playerChoice + ' and computer played ' + computerChoice + '. You won this round.'
    console.log('win');
    console.log(currentRound);
}
function lose(playerChoice, computerChoice) {
    params.computerScore++;
    params.currentRound++;
    computerResult.innerHTML = params.computerScore;
    playerResult.innerHTML = params.playerScore;
    output.innerHTML = 'You played ' + playerChoice + ' and computer played ' + computerChoice + '. You lost this round.'
    console.log('lose');
    console.log(currentRound);
}
function draw(playerChoice, computerChoice) {
    params.currentRound++;
    output.innerHTML = 'You played ' + playerChoice + ' and computer also played ' + computerChoice + '. Its a draw.'
    console.log('draw');
    console.log(currentRound);
}

function playerMove(playerChoice) {
    computerChoice = getComputerChoice();
    switch(playerChoice + ' ' + computerChoice) {
        case 'rock scissors':
        case 'paper rock':
        case 'scissors paper':
            params.progress.push({
                roundNumber: currentRound,
                player: playerChoice,
                computer: computerChoice,
                winner: 'Player',
                playerScore: playerScore,
                computerScore: computerScore
            });
            win(playerChoice, computerChoice);
            break;
        case 'rock paper':
        case 'paper scissors':
        case 'scissors rock':
            params.progress.push({
                roundNumber: currentRound,
                player: playerChoice,
                computer: computerChoice,
                winner: 'Computer',
                playerScore: playerScore,
                computerScore: computerScore
            });
            lose(playerChoice, computerChoice);
            break;
        case 'rock rock':
        case 'paper paper':
        case 'scissors scissors':
        params.progress.push({
            roundNumber: currentRound,
            player: playerChoice,
            computer: computerChoice,
            winner: 'Draw',
            playerScore: playerScore,
            computerScore: computerScore
        });
            draw(playerChoice, computerChoice);
            break;
    }
    checkRounds();
}


rock.addEventListener('click', function(){
    playerMove('rock');
})
scissors.addEventListener('click', function(){
    playerMove('scissors');
})
paper.addEventListener('click', function(){
    playerMove('paper');
})


// cos co zrobiłem 
var whatHavePlayerMoveClass = document.querySelectorAll('.player-move');


console.log(whatPlayerHasJustClicked + 'playerclicked');

for (i=0 ; i<whatHavePlayerMoveClass.length ; i++) {
    var whatPlayerHasJustClicked = whatHavePlayerMoveClass[i].getAttribute('data-move');
    playerMove(whatPlayerHasJustClicked);

}


var params = {
    playerScore: 0,
    computerScore: 0,
    maxRounds: '',
    currentRound: 0,
    progress: []
}
// ---


function checkRounds() {
    if (params.currentRound >= params.maxRounds) {
        gameOver();
    }
}

function gameOver() {
    whoWinner();
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

