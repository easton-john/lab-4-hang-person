/* globals wordList */
/*exported getRandomIndex randomWord wordList*/
//load word function:
//use randomly grabs word from array list
//input of a random word from word list when "start" button is pressed

//this function will return a random word for hang person game
function randomWord(wordArray) {

    //this pull a random number
    var index = getRandomIndex(wordArray.length);
    console.log(index);

    //this uses the random number to grab a word from our array
    var word = wordArray[index];
    console.log(word);

    //convert word into an array
    var newWordArray = word.split('');
    console.log(newWordArray);

}

//this generates random word
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//this is the for loop to check if letter is in word


var arrayValue = ['w', 'o', 'r', 'd'];

function buttonPress() {
    var userInput = document.getElementById('user-input').value;
    console.log(userInput);
    for(var i = 0; i < arrayValue.length; i++) {
        if(userInput === arrayValue[i]) {
            console.log(userInput);
        }
        else {
            console.log('wrong');
        }
    }
}
