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

//small change

// storing randomized word from randomWord(wordArray)
var gameWord = randomWord(wordList);
console.log(gameWord);

//var maxGuesses = 6;
// if(maxGuesses === 0){
//     console.log('sorry, out of guesses.');
//     break;
// }

var newArray = [];
for(var i = 0; i < gameWord.length; i++) {
    newArray[i] = '_';
}

console.log(newArray);

var guessesRemaining = 6;

// while(guessesRemaining > 0){
//     if(gameWord.includes(userInput)){
//         console.log('good job');
//     }
//     else {
//         guessesRemaining--;
//         console.log(guessesRemaining);
        
//     }

// }

// 

function buttonPress() {
    var userInput = document.getElementById('user-input').value;
    console.log('user typed ' + userInput);

    for(var j = 0; j < gameWord.length; j++) {
        var wrongGuess;
        if(userInput.toLowerCase() === gameWord[j]) {

            newArray[j] = userInput;
            document.getElementById('letters').textContent = newArray.join(' ');
            console.log('true');
        }
        else {
            console.log(userInput + ' is wrong');
            wrongGuess = guessesRemaining--;
            alert('you have ' + guessesRemaining + ' left');
            return wrongGuess;
        }
    }
}
console.log(newArray.join(' '));