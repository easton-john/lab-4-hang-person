/* globals wordList */
/*exported randomGameWord wordList initiateGame*/

var userInput;
var guessesRemaining = 5;
var correctAnswers = [];
var lettersGuessed = [];

var randomGameWord = wordList[Math.floor(Math.random() * Math.floor(wordList.length))];
randomGameWord = randomGameWord.toUpperCase().split('');

// creating array to display _ and correctly guess letters
for(var i = 0; i < randomGameWord.length; i++) {
    correctAnswers[i] = '_';
}
//displaying game status to user
upDateGameStatus();

document.getElementById('guesses').textContent = 'You have ' + (guessesRemaining + 1) + ' guesses to start!';

// grabbing user input and running it through the game loop
function initiateGame() {
    userInput = document.getElementById('user-input').value.toUpperCase().trim();
    gameLoop();
    upDateGameStatus();

    // clears text box after game runs through loop
    document.getElementById('user-input').value = '';
}

// the beautiful hang person game
function gameLoop() {

    if(guessesRemaining === 0) {
        alert('Sorry You LOSE!!!');

    }
    else if(userInput === '') {
        alert('Enter a letter please!');
    }

    else if(lettersGuessed.includes(userInput)) {
        alert('You\'ve already guessed ' + userInput + '. Please enter another letter.');
    }

    // need to git this condition to work still
    else if(correctAnswers.join('') === randomGameWord.join('')) {
        alert('You win!');
    }

    else if(randomGameWord.includes(userInput)) {
        positionCheck();
    }
    else {
        guessesRemaining--;
    }
    lettersGuessed.push(userInput);
}

// checking position of letters
function positionCheck() {

    for(var j = 0; j < randomGameWord.length; j++) {
        if(userInput === randomGameWord[j]) {
            correctAnswers[j] = userInput;
        }
    }
}

// showing results to user
function upDateGameStatus() {
    document.getElementById('letters').textContent = correctAnswers.join(' ');
    document.getElementById('guessed-letters').textContent = 'Guessed letters: ' + lettersGuessed.join(', ');
    document.getElementById('guesses').textContent = 'You have ' + (guessesRemaining + 1) + ' guesses remaining. ';
}
