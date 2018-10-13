var randomWord = ["chocobo", "malboro", "tonberry", "cactuar", "coeurl", "eorzea", "othard", "gridania", "thanalan", "limsalominsa", "coerthas", "dravania", "behemoth"];

var randomAnswer = randomWord[Math.floor(Math.random() * randomWord.length)];

var str;
var count = 0;
var answer = [];

function beginGame() {
    for (var i = 0; i < randomWord.length; i++) {
            answer[i] = "_";
    }

    str = answer.join(" ");
    document.getElementById("playerAnswer").innerHTML = str;


}

function guessAnswer() {
    var letter = document.getElementById("letter").value;

    if (letter.length > 0) {
        for (var i = 0; i < randomAnswer.length; i++) {
            if (randomAnswer[i] === letter) {
                answer[i] = letter;
            }
        }
        count++;
        document.getElementById("counter").innerHTML = "No. of guesses: " + count;
        document.getElementById("playerAnswer").innerHTML = answer.join(" ");
    }
}