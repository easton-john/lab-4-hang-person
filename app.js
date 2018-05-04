/* globals wordList */
/*exported getRandomIndex randomWord wordList buttonPress*/


//this generates random word
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//this function will return a random word for hang person game
function randomWord(wordArray) {

    //this pull a random number
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
var arrayValue = randomWord(wordList);
console.log(arrayValue);


// this is the for loop to check if letter is in word
function buttonPress() {
    var userInput = document.getElementById('user-input').value;
    console.log(userInput);

    for(var i = 0; i < arrayValue.length; i++) {
        if(userInput === arrayValue[i]) {
            console.log(userInput + ' true');
        }
        else {
            console.log('wrong');
        }
    }
}
