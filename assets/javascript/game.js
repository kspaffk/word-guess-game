var guessGame = {
    wordList: ["sauron", "melkor", "aragorn", "strider", "gandalf", "galadriel", "legolas", "thranduil",
        "baggins", "frodo", "samwise", "pippin", "gimli", "boromir", "faramir", "arwen", "bilbo",
        "bombadil", "saruman", "meriadoc", "denethor", "elendil", "elrond", "celeborn", "eomer", "eowyn",
        "rosie", "isildur", "haldir", "proudfoot", "smaug", "thorin", "theoden", "wormtongue"],
    score: 0,
    tries: 10,
    currentWord: "",
    letterGuessed: "",
    correctLetterIndex: [],
    wrongGuess: true,


    getRandomWord: function() {
        this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    },

    increaseScore: function() {
        this.score++;
        return this.score;
    },

    checkLetter: function(key) {
        // check to see if the letter was guessed (-1 if not guessed, otherwise was guessed and needs to skip function)
        if ( this.letterGuessed.indexOf(key) === -1 ) {
            // default to wrong guess
            this.wrongGuess = true;
            // clear out the correctLetterIndex to get a new array that will contain the index of letters that match
            this.correctLetterIndex = [];
            // check the key against the currentWord string
            var index = 0;
            // runs at least once and continues when there is an instance of the letter guessed
            while (index >= 0) {
                // sets index to index of letter if exists for -1 if doesn't
                index = this.currentWord.indexOf(key, index);
                console.log(index);
                // if the letter was in currentWord
                if (index >= 0) {
                    this.correctLetterIndex.push(index);
                    this.wrongGuess = false;
                    index++;
                }
            }
            console.log(this.correctLetterIndex);
            if (this.wrongGuess) {
                this.letterGuessed = this.letterGuessed + key;
                console.log(this.letterGuessed);
                this.tries--;
            }
        }
    }
}
