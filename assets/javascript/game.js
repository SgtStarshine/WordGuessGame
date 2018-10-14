var randomWord = ["chocobo", "malboro", "tonberry", "cactuar", "coeurl", "eorzea", "othard", "gridania", "thanalan", "limsalominsa", "coerthas", "dravania", "behemoth"];

var randomAnswer = randomWord[Math.floor(Math.random() * randomWord.length)];

var str;
var lives = 10;
var count = 0;
var answer = [];

function beginGame() {

    str = document.getElementById("playerAnswer");
    correct = document.createElement('ul');
    
    for (var i = 0; i < randomAnswer.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');

        guess.innerHTML = "_";

        answer.push(guess);
        str.appendChild(correct);
        correct.appendChild(guess);
    }
}

document.onkeyup = function(event) {
    var choice = event.key;

    if (choice.length > 0) {
        for (var i = 0; i < randomAnswer.length; i++) {
            if (randomAnswer[i] === choice) {
                answer[i] = choice;
                count++;
            }
        }

        var j = (randomAnswer.indexOf(choice));
        
        if (j === -1) {
            lives -= 1;
        }
        
        document.getElementById("playerAnswer").innerHTML = answer.join(" ");
        document.getElementById("counter").innerHTML = "No. of correct guesses: " + count;
        document.getElementById("myLives").innerHTML = "You have " + lives + " lives";
        
        if (lives < 1) {
            document.getElementById("myLives").innerHTML = "Game Over";
        }
        for (var i = 0; i < answer.length; i++) {
            if (count === answer.length) {
                document.getElementById("myLives").innerHTML = "You Win!";
            }
        }
    }
}