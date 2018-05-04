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


var newArray = [];
for(var i = 0; i < gameWord.length; i++) {
    newArray[i] = '_';
}

console.log(newArray);

//var guessesRemaining;
//while(guessesRemaining < 6) {
//guessesRemaining++

function buttonPress() {
    var userInput = document.getElementById('user-input').value;
    console.log('user typed ' + userInput);

    for(var j = 0; j < gameWord.length; j++) {
        if(userInput.toLowerCase() === gameWord[j]) {
            console.log('true');
            newArray[j] = userInput;
            document.getElementById('letters').textContent = newArray.join(' ');   
        }
        else {
            console.log(userInput + ' is wrong');
        }
    }
}
console.log(newArray.join(' '));