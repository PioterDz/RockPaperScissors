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
    console.log('computerLotto =' + computerLotto);
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


// game over function
function gameOver() {
    function whoWinner(playerScore, computerScore) {
        if (playerScore > computerScore) {
            winner === 'Player';
        }
        else if (playerScore < computerScore) {
            winner === 'Computer';
        }
        return winner;
    };
    document.write('Game Over.' + winner + 'wins.');
    document.write('Click to play again');
    reloadButton = document.createElement('button');
    reloadButton.onClick = location.reload();
}

function compareGames () {
    getComputerChoice()
    if (playerChoice === computerChoice) {
       tie();
   }
   else if (playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'paper') {
       win();
   }
   else if (playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'scissors' && computerChoice === 'rock') {
       lose();
   }
}

// init function 
newGame.addEventListener('click', function gameInit() {
    maxRounds = prompt('How many rounds you want to play?');
    alert('Choose the paper, scissors or rock');
    console.log('new game ' + maxRounds);
});
while (currentRound < maxRounds) {
    paper.addEventListener('click', function playerMove() {
        playerChoice === 'paper';
        function compareGames();
        console.log(playerChoice);
    });
        
    rock.addEventListener('click', function playerMove() {
        playerChoice === 'rock';
        function compareGames();
        console.log(playerChoice);
    });
        
    scissors.addEventListener('click', function playerMove() {
        playerChoice === 'scissors';
        function compareGames();
        console.log(playerChoice);
    });
    function gameOver();
}
