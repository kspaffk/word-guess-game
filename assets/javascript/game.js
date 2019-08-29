var guessGame = {
    wordList: ["sauron", "melkor", "aragorn", "strider", "gandalf", "galadriel", "legolas", "thranduil",
        "baggins", "frodo", "samwise", "pippin", "gimli", "boromir", "faramir", "arwen", "bilbo",
        "bombadil", "saruman", "meriadoc", "denethor", "elendil", "elrond", "celeborn", "eomer", "eowyn",
        "rosie", "isildur", "haldir", "proudfoot", "smaug", "thorin", "theoden", "wormtongue"],
    score: 0,
    statusOfWord: "",

    getRandomWord: function() {
        return this.wordList[Math.floor(Math.random() * this.wordList.length)];
    },

    increaseScore: function() {
        return this.score++;
    },
}