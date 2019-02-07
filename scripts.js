'use strict'

var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var rock = document.getElementById('rock');
var output = document.getElementById('output');
var result = document.getElementById('result');
var newGame = document.getElementById('new-game')

paper.addEventListener('click', playerMovePaper);
scissors.addEventListener('click', playerMoveScissors);
rock.addEventListener('click', playerMoveRock);
newGame.addEventListener('click', function(){
  howManyRounds = window.prompt('How many rounds you want to play?');
});

function computerWinGame() {
        output.innerHTML = ('Computer has won this game. Game over') + output.innerHTML;
}

function playerWinGame() {
        output.innerHTML = ('You have won this game!') + output.innerHTML;
}

// computerMove : 1 = paper, 2 = scissors, 3 = rock
var computerResult = 0;
var playerResult = 0;
function playerMovePaper() {
    var computerMove = Math.round((Math.random() * [2]) + 1);
    if (computerMove == 1) {
        output.innerHTML = ('Paper vs. paper. Tie.' + '<br>') + output.innerHTML;
        computerResult = computerResult + 0;
        playerResult = playerResult + 0;
        result.innerHTML = (computerResult + ' - ' + playerResult);
    }
    else if (computerMove == 2) {
        output.innerHTML = ('Computer choosed scisoors and won this round. You lost.' + '<br>') + output.innerHTML;
        computerResult = computerResult + 1;
        playerResult = playerResult + 0;
        result.innerHTML = (computerResult + ' - ' + playerResult);
        if (computerResult === howManyRounds) {
            computerWinGame();
        }
        if (playerResult === howManyRounds) {
            playerWinGame();
        }
    }
    else if (computerMove == 3) {
        output.innerHTML = ('Computer choosed rock and lost. You won this round.' + '<br>') + output.innerHTML;
        computerResult = computerResult + 0;
        playerResult = playerResult + 1;
        result.innerHTML = (computerResult + ' - ' + playerResult);
        if (computerResult === howManyRounds) {
            computerWinGame();
        }
        if (playerResult === howManyRounds) {
            playerWinGame();
        }
    }
}

function playerMoveScissors() {
    var computerMove = Math.round((Math.random() * [2]) + 1);
    if (computerMove == 1) {
        output.innerHTML = ('Computer choosed paper and lost this round. You won.' + '<br>') + output.innerHTML;
        computerResult = computerResult + 0;
        playerResult = playerResult + 1;
        result.innerHTML = (computerResult + ' - ' + playerResult);
        if (computerResult === howManyRounds) {
            computerWinGame();
        }
        if (playerResult === howManyRounds) {
            playerWinGame();
        }
    }
    else if (computerMove == 2) {
        output.innerHTML = ('Scissors vs. scissors. Tie.' + '<br>') + output.innerHTML;
        computerResult = computerResult + 0;
        playerResult = playerResult + 0;
        result.innerHTML = (computerResult + ' - ' + playerResult);
    }
    else if (computerMove == 3) {
        output.innerHTML = ('Computer choosed rock and won this round. You lost.' + '<br>') + output.innerHTML;
        computerResult = computerResult + 1;
        playerResult = playerResult + 0;
        result.innerHTML = (computerResult + ' - ' + playerResult);
        if (computerResult === howManyRounds) {
            computerWinGame();
        }
        if (playerResult === howManyRounds) {
            playerWinGame();
        }
    }
}

function playerMoveRock() {
    var computerMove = Math.round((Math.random() * [2]) + 1);
    if (computerMove == 1) {
        output.innerHTML = ('Computer choosed paper and won this round. You lost.' + '<br>') + output.innerHTML;
        computerResult = computerResult + 1;
        playerResult = playerResult + 0;
        result.innerHTML = (computerResult + ' - ' + playerResult);
        if (computerResult === howManyRounds) {
            computerWinGame();
        }
        if (playerResult === howManyRounds) {
            playerWinGame();
        }
    }
    else if (computerMove == 2) {
        output.innerHTML = ('Computer choosed scissors and lost this round. You won.' + '<br>') + output.innerHTML;
        computerResult = computerResult + 0;
        playerResult = playerResult + 1;
        result.innerHTML = (computerResult + ' - ' + playerResult);
        if (computerResult === howManyRounds) {
            computerWinGame();
        }
        if (playerResult === howManyRounds) {
            playerWinGame();
        }
    }
    else if (computerMove == 3) {
        output.innerHTML = ('Rock vs. rock. Tie.' + '<br>') + output.innerHTML;
        computerResult = computerResult + 0;
        playerResult = playerResult + 0;
        result.innerHTML = (computerResult + ' - ' + playerResult);
    } 
}

