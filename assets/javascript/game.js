var guessGame = {
    wordList: ["sauron", "melkor", "aragorn", "strider", "gandalf", "galadriel", "legolas", "thranduil",
        "baggins", "frodo", "samwise", "pippin", "gimli", "boromir", "faramir", "arwen", "bilbo",
        "bombadil", "saruman", "meriadoc", "denethor", "elendil", "elrond", "celeborn", "eomer", "eowyn",
        "rosie", "isildur", "haldir", "proudfoot", "smaug", "thorin", "theoden", "wormtongue"],
    score: 0,
    tries: 10,
    currentWord: "",
    lettersGuessed: "",
    correctLettersGuessed: 0,
    correctLetterIndex: [],

    getRandomWord: function() {
        this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    },

    increaseScore: function() {
        this.score++;
        return this.score;
    },

    checkLetter: function(key) {
        // add guessed letter to the string of letters guessed
        this.lettersGuessed = this.lettersGuessed + key;
        // clear out the correctLetterIndex to get a new array that will contain the index of letters that match
        this.correctLetterIndex = [];
        // reset index for current guess
        var index = 0;
        // runs at least once and again when there is an instance of the letter guessed
        while (index >= 0) {
            // sets index to index of letter if exists for -1 if doesn't
            index = this.currentWord.indexOf(key, index);
            // if the letter was in currentWord
            if (index >= 0) {
                // add the index of the letter to the array to change letter in html
                this.correctLetterIndex.push(index);
                // increase index to see if another letter in string matches guess
                index++;
                // count how many letters have been guessed to find win condition
                this.correctLettersGuessed++;
                console.log(this.correctLettersGuessed);
            }
        }
        // if letter was not in word (so is a wrong guess)
        if (this.correctLetterIndex.length === 0) {
            this.tries--;
        }
    },

    checkWin: function() {
        if ( this.correctLettersGuessed === this.currentWord.length ) {
            return true;
        }
    },

    checkLoss: function() {
        if ( this.tries <= 0 ) {
            return true;
        }
    },
}
