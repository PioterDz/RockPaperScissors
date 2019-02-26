'use strict'

var output = document.getElementById('output');
var result = document.getElementById('result');
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


function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {
    playerScore++;
    playerResult.innerHTML = playerScore;
    console.log('win');
}
function lose() {
    computerScore++;
    computerResult.innerHTML = computerScore;
    console.log('lose');
}
function draw() {
    console.log('draw');
}

function game(playerChoice) {
    computerChoice = getComputerChoice();
    switch(playerChoice + ' ' + computerChoice) {
        case 'rock scissors':
        case 'paper rock':
        case 'scissors paper':
            win();
            break;
        case 'rock paper':
        case 'paper scissors':
        case 'scissors rock':
            lose();
            break;
        case 'rock rock':
        case 'paper paper':
        case 'scissors scissors':
            draw();
            break;
    }
}


function main() {
    rock.addEventListener('click', function(){
        game('rock');
    })
    scissors.addEventListener('click', function(){
        game('scissors');
    })
    paper.addEventListener('click', function(){
        game('paper');
    })
}

main();







/* old version
// init function 
newGame.addEventListener('click', function gameInit() {
    maxRounds = prompt('How many rounds you want to play?');
    alert('Choose the paper, scissors or rock');
    console.log('new game ' + maxRounds);
    eventListeners();
});

function eventListeners() {

    paper.addEventListener('click', function playerMove() {
        playerChoice === 'paper';
        console.log(playerChoice);

    });
        
    rock.addEventListener('click', function playerMove() {
        playerChoice === 'rock';
        console.log(playerChoice);

    });
        
    scissors.addEventListener('click', function playerMove() {
        playerChoice === 'scissors';
        console.log(playerChoice);

    });
    
}
function lotto() {
    computerLotto = Math.round((Math.random() * [2]) + 1);
    console.log(computerLotto);
    return computerLotto;
}
// get computer's choice
function getComputerChoice() {
    lotto();
    if (computerLotto === 1) {
        computerChoice === 'paper';
        return computerChoice;
    }
    else if (computerLotto === 2) {
        computerChoice === 'rock';
        return computerChoice;
    }
    else if (computerLotto === 3) {
        computerChoice === 'scissors';
        return computerChoice;
    }
    console.log(computerChoice);
    
}

// win, lose or tie function
function win(playerChoice, computerChoice) {
    playerScore++;
    currentRound++;
    output.innerHTML = 'You won.' + ' You played ' + playerChoice + 'and computer played ' + computerChoice + '.';
    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore;
}
function lose(playerChoice, computerChoice) {
    computerScore++;
    currentRound++;
    output.innerHTML = 'You lost.' + ' You played ' + playerChoice + 'and computer played ' + computerChoice + '.';
    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore;
}
function tie(playerChoice, computerChoice) {
    currentRound++;
    output.innerHTML = 'Tie.' + ' You played ' + playerChoice + 'and computer played ' + computerChoice + '.';
    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore;
}

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

function compareGames() {
    getComputerChoice();
    if (playerChoice === computerChoice) {
       tie(playerChoice, computerChoice);
   }
   else if (playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'paper') {
       win(playerChoice, computerChoice);
   }
   else if (playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'scissors' && computerChoice === 'rock') {
       lose(playerChoice, computerChoice);
   }
}

*/

