var guessGame = {
    wordList: ["sauron", "melkor", "aragorn", "strider", "gandalf", "galadriel", "legolas", "thranduil",
        "baggins", "frodo", "samwise", "pippin", "gimli", "boromir", "faramir", "arwen", "bilbo",
        "bombadil", "saruman", "meriadoc", "denethor", "elendil", "elrond", "celeborn", "eomer", "eowyn",
        "rosie", "isildur", "haldir", "proudfoot", "smaug", "thorin", "theoden", "wormtongue"],
    score: 0,
    statusOfWord: "",
    currentWord: "",
    guessWord: "",

    getRandomWord: function() {
        this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        for (var i = 0; i < this.currentWord.length; i++) {
            this.guessWord = this.guessWord + "_";
        }
        
    },

    increaseScore: function() {
        this.score++;
        return this.score;
    },
}