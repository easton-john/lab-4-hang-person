/* globals wordList */
/*exported randomGameWord wordList initiateGame*/

var userInput;
var guessesRemaining = 5;
var lettersGuessed = [];

// random word generator
var randomGameWord = wordList[Math.floor(Math.random() * Math.floor(wordList.length))];
randomGameWord = randomGameWord.toUpperCase().split('');

// creating array to display game board and correctly guessed letters
var correctAnswers = [];
for(var i = 0; i < randomGameWord.length; i++) {
    correctAnswers[i] = '_';
}
//displaying game status to user
upDateGameStatus();

document.getElementById('guesses').textContent = 'Guesses remaining: ' + (guessesRemaining + 1);

// grabbing user input and running it through the game loop
function initiateGame() {
    userInput = document.getElementById('user-input').value.toUpperCase().trim();
    gameLoop();
    upDateGameStatus();
    winOrLose();

    // clears text box after game runs through loop
    document.getElementById('user-input').value = '';
}

// the beautiful hang person game
function gameLoop() {

    if(userInput === '') {
        alert('Enter a letter please!');
    }

    else if(lettersGuessed.includes(userInput)) {
        alert('You\'ve already guessed ' + userInput + '. Please enter another letter.');
    }

    else if(randomGameWord.includes(userInput)) {
        correctLetterPlacer();
    }
    else {
        guessesRemaining--;
    }
}

// checking position of letters
function correctLetterPlacer() {

    for(var j = 0; j < randomGameWord.length; j++) {
        if(userInput === randomGameWord[j]) {
            correctAnswers[j] = userInput;
        }
    }
}

// showing results to user
function upDateGameStatus() {

    if(lettersGuessed.includes(userInput)) {
        console.log(lettersGuessed);
    }

    else {
        lettersGuessed.push(userInput);
        document.getElementById('guessed-letters').textContent = 'Guessed letters: ' + lettersGuessed.join(' ');
    }

    document.getElementById('game-board').textContent = correctAnswers.join(' ');
    document.getElementById('guesses').textContent = 'Guesses remaining: ' + (guessesRemaining + 1);
}

function winOrLose() {
    if(correctAnswers.join('') === randomGameWord.join('')) {
        alert('You win!');
        document.getElementById('guesses').textContent = 'Congrats!';
        document.getElementById('button').disabled = true;
    }

    else {
        if(guessesRemaining === -1) {
            alert('Sorry You LOSE!!!');
            document.getElementById('button').disabled = true;
        }
    }
}

function newGame() {
    location.reload();
}