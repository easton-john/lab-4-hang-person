/*exported getRandomIndex randomWord*/
//load word function:
//use randomly grabs word from array list
//input of a random word from word list when "start" button is pressed

//this function will return a random word for hang person game
function randomWord(wordList) {

    var index = getRandomIndex(wordList.length);
    console.log(index);

}

//this generates random word 
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}