/* globals wordList */
/*exported getRandomIndex randomWord wordList buttonPress*/


//this generates random word
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//this function will return a random word for hang person game
function randomWord(wordArray) {

    //this pulls a random number
    var index = getRandomIndex(wordArray.length);
    console.log(index);

    //this uses the random number to grab a word from our arrayt
    var word = wordArray[index];
    console.log(word);

    //convert word into an array
    var newWordArray = word.split('');
    console.log(newWordArray);

    return newWordArray;
}

// storing randomized word from randomWord(wordArray)
var gameWord = randomWord(wordList);
console.log(gameWord);

// creating array to display _ and correctly guess letters
var newArray = [];
var guessLettersArray = [];
for(var i = 0; i < gameWord.length; i++) {
    newArray[i] = '_';
}
//displaying initial underscores for game
updateLetters();

var guessesRemaining = 6;
var userInput;

document.getElementById('guesses').textContent = 'You have 6 guesses to start!';
// grabbing user input
function buttonPress() {
    userInput = document.getElementById('user-input').value.trim();
    console.log('user typed ' + userInput);
    gamePlay();
    document.getElementById('user-input').value = '';
}

// showing results to user
function updateLetters() {
    document.getElementById('letters').textContent = newArray.join(' ');
    document.getElementById('guessed-letters').textContent = 'Guessed letters: ' + guessLettersArray.join(', ');
}

// the beautiful hang person game
function gamePlay() {

    if(guessesRemaining === 1) {
        alert('Sorry You LOSE!!!');

    }
    else if(userInput === '') {
        alert('Enter a letter please!');
    }

    else if(guessLettersArray.includes(userInput)) {
        alert('You\'ve already guessed ' + userInput + '. Please enter another letter.');
    }
    else if(gameWord.includes(userInput)) {
        positionCheck();
        updateLetters();
        if(gameWord.length === guessLettersArray.length){
            setTimeout(function(){
                alert('YOU WIN! The correct word was ' + gameWord.join('') + '!!!');
            }, 100);
        }
    }
    else {
        guessesRemaining--;
        console.log(userInput);
    }
    document.getElementById('guesses').textContent = 'You have ' + guessesRemaining + ' guesses remaining. ';

}

// checking position of letters
function positionCheck() {

    for(var j = 0; j < gameWord.length; j++) {
        if(userInput.toLowerCase() === gameWord[j]) {

            newArray[j] = userInput;
            guessLettersArray[j] = userInput;
            //document.getElementById('letters').textContent = newArray.join(' ');
            console.log('true');
            
        }
        else {
            console.log(userInput + ' is wrong');
        }
    }
}