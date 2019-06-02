'use strict'

var output = document.getElementById('output');
var newGame = document.getElementById('new-game');
var playerResult = document.getElementById('player-score');
var computerResult = document.getElementById('computer-score');
var choices = ['rock', 'paper', 'scissors'];
var computerChoice;
var winner;
var allGameButtons = document.querySelectorAll('.player-move');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var rock = document.getElementById('rock');

var params = {
    'currentRound': 0,
    'playerScore': 0,
    'computerScore': 0,
    'maxRounds': undefined,
    'progress': [{}]
};
//modal
var endGameModal = document.getElementById('end-game-modal');
var playAgainBtn = document.getElementById('play-again');
var endGameResult = document.getElementById('end-game-result');


initialize();


function initialize() {
    
    changeElementsVisibility('none', [paper, rock, scissors]);
    newGame.addEventListener('click', gameInit);
    modalEventListeners();
}

function enableEventListeners() {
    for(let i=0; i<allGameButtons.length ; i++) {
        allGameButtons[i].addEventListener('click', function(e) {
            console.log('click');
            gettingAttributeFromButtons(allGameButtons[i]);
            var choice = allGameButtons[i].getAttribute('data-move');
            playerMove(choice);
        });
    }
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
    console.log(params.maxRounds + 'params');
}

function gameInit() {
    resetGame();
    maxRoundsPrompt();
    changeElementsVisibility('none', [newGame]);
    changeElementsVisibility('inline-flex', [paper, rock, scissors]);
    enableEventListeners();
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(choice, computerChoice) {
    params.playerScore++;
    params.currentRound++;
    playerResult.innerHTML = params.playerScore;
    computerResult.innerHTML = params.computerScore;
    output.innerHTML = 'You played ' + choice + ' and computer played ' + computerChoice + '. You won this round.';

    params.progress[params.currentRound - 1] = 
        {
            'thisRoundNumber': params.currentRound,
            'thisRoundPlayerMove': choice,
            'thisRoundComputerMove': computerChoice,
            'thisRoundResult': 'You Win',
            'afterThisRoundOverallResult': 'Player ' + params.playerScore + ' : ' + params.computerScore + ' Computer'
        };
    console.log(params.progress[params.currentRound - 1], 'progressss');
}
function lose(choice, computerChoice) {
    params.computerScore++;
    params.currentRound++;
    computerResult.innerHTML = params.computerScore;
    playerResult.innerHTML = params.playerScore;
    output.innerHTML = 'You played ' + choice + ' and computer played ' + computerChoice + '. You lost this round.'
    params.progress[params.currentRound - 1] =
        {
            'thisRoundNumber': params.currentRound,
            'thisRoundPlayerMove': choice,
            'thisRoundComputerMove': computerChoice,
            'thisRoundResult': 'Computer Wins',
            'afterThisRoundOverallResult': 'Player ' + params.playerScore + ' : ' + params.computerScore + ' Computer'
        };
    console.log(params.progress[params.currentRound - 1], 'progressss');
}
function draw(choice, computerChoice) {
    params.currentRound++;
    output.innerHTML = 'You played ' + choice + ' and computer also played ' + computerChoice + '. Its a draw.'
    params.progress[params.currentRound - 1] =
        {
            'thisRoundNumber': params.currentRound,
            'thisRoundPlayerMove': choice,
            'thisRoundComputerMove': computerChoice,
            'thisRoundResult': 'Draw',
            'afterThisRoundOverallResult': 'Player ' + params.playerScore + ' : ' + params.computerScore + ' Computer'
        };
    console.log(params.progress[params.currentRound - 1], 'progressss');
}

function playerMove(choice) {
    console.log('playerMOVE');
    computerChoice = getComputerChoice();
    console.log('computerChoice', computerChoice);
    switch(choice + ' ' + computerChoice) {
        case 'rock scissors':
        case 'paper rock':
        case 'scissors paper':
            win(choice, computerChoice);
            break;
        case 'rock paper':
        case 'paper scissors':
        case 'scissors rock':
            lose(choice, computerChoice);
            break;
        case 'rock rock':
        case 'paper paper':
        case 'scissors scissors':
            draw(choice, computerChoice);
            break;
    }
    checkRounds();
    console.log(params.playerScore + 'params');
    console.log(params.computerScore + 'params');

}

function checkRounds() {
    if (params.currentRound == params.maxRounds) {

        gameOver();
    }
}

function gameOver() {
    whoWinner();
    tableWithAllResults();
    changeElementsVisibility('none', [paper,rock,scissors] );
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

function resetParams() {
    params.currentRound = 0;
    params.playerScore = 0;
    params.computerScore = 0;
    params.maxRounds = undefined;
    for (var i=0 ; i<params.progress.length ; i++) {
        params.progress[i] = {
            'thisRoundNumber': undefined,
            'thisRoundPlayerMove': undefined,
            'thisRoundComputerMove': undefined,
            'thisRoundResult': undefined,
            'afterThisRoundOverallResult': undefined
        }
        console.log('params.progress' + params.progress[i]);
    }
} 

function resetGame() {
    output.innerHTML = " ";
    playerResult.innerHTML = " ";
    computerResult.innerHTML = " ";
    resetParams();
}


function tableWithAllResults() {
    var tableWithResult = document.getElementById('table-with-result');

    for(var i=0 ; i<params.progress.length ; i++) {
        var newRow = tableWithResult.insertRow(1);

        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = params.progress[i].thisRoundNumber;

        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = params.progress[i].thisRoundPlayerMove;

        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = params.progress[i].thisRoundComputerMove;

        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = params.progress[i].thisRoundResult;

        var cell5 = newRow.insertCell(4);
        cell5.innerHTML = params.progress[i].afterThisRoundOverallResult;
    }
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

