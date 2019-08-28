var guessGame = {
    wordList: ["gondor", "mirkwood", "mordor", "lorien", "rohan", "shire", "baraddur", "moria", "fangorn"],

    
    getRandomWord: function() {
        return this.wordList[Math.floor(Math.random() * this.wordList.length)];
    }
}