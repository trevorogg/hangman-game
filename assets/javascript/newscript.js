window.onload = function () {
    // array and variable declarations
            var phrase = ["Hydrogen",
            "Helium",
            "Lithium",
            "Boron",
            "Carbon",
            "Nitrogen",
            "Oxygen",
            "Neon",
            "Sodium",
            "Magnesium",
            "Aluminium",
            "Silicon",
            "Sulfur",
            "Chlorine",
            "Argon",
            "Potassium",
            "Calcium",
            "Scandium",
            "Titanium",
            "Iron",
            "Cobalt",
            "Nickel",
            "Copper",
            "Zinc",
            "Silver",
            "Cadmium",
            "Indium",
            "Tin",
            "Iodine",
            "Xenon",
            "Platinum",
            "Gold",
            "Mercury",
            "Lead",
            "Bismuth",
            "Radon"];
    var winningPhrase = [];
    var onScreenPhrase = [];
    var fixedPhrase = [];
    var lettersGuessed = [];
    var validGuess = ["a", "b", "c", "d", "e",
        "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var guessesLeft = 10;
    var numberCorrect = 0;
    var currentGuess;
    var containsCorrect = false;
    var isValidGuess;
    var gameWon = false;
    var alreadyGuessed;

    var writeToPhrase = document.getElementById("Phrase");
    var writeToRemaining = document.getElementById("Remaining");
    var writeToGuessed = document.getElementById("Guessed");

    function newGame() {
        gameWon = false;

        // pick winning phrase and make it all lowercase
        winningPhrase = phrase[Math.floor(Math.random() * phrase.length)];
        winningPhrase = winningPhrase.toLocaleLowerCase();

        // new game - reset guesses, number correct, and letters guessed
        guessesLeft = 10;
        numberCorrect = 0;
        lettersGuessed = [];

        // reset colors from previous game
        $('#Phrase').css({ "color": "gainsboro" });
        $("#Remaining").css({ "color": "black" });

        onScreenPhrase = [];

        // generate string of dashes that matches winningPhrase length
        for (i = 0; i < winningPhrase.length; i++) {
            onScreenPhrase[i] = "_";
        }
        fixedPhrase = onScreenPhrase.join(" ");

        // write all game elements to the screen
        writeToPhrase.innerHTML = fixedPhrase;
        writeToRemaining.innerHTML = guessesLeft;
        writeToGuessed.innerHTML = lettersGuessed;

        $("#winner").hide();
        $("#loser").hide();
        $(".row").fadeIn(750, function () { });
    }

    function checkWinner(gameWon) {
        if (gameWon == true) {

            $(".row").fadeOut(750, function () { });
            $("#winner").fadeIn(1550, function () { });

        }
    }

    function checkLoser(guessesLeft) {
        if (guessesLeft == 0) {
            $(".row").fadeOut(750, function () { });
            $("#loser").html(winningPhrase);
            $("#loser").fadeIn(1550, function () { });
        }
    }

    newGame();

    document.onkeyup = function (event) {

        currentGuess = event.key;
        containsCorrect = false;

        // step through winningPhrase to see if guess was correct
        for (i = 0; i < winningPhrase.length; i++) {
            if (currentGuess == winningPhrase[i]) {
                onScreenPhrase[i] = winningPhrase[i];
                containsCorrect = true;
                numberCorrect++;
            }
        }

        // check if currentGuess has already been guessed
        alreadyGuessed = lettersGuessed.indexOf(currentGuess);
        isValidGuess = validGuess.indexOf(currentGuess);

        // if guess was incorrect and letter has not been guessed before, deduct one guess
        if (containsCorrect == false && alreadyGuessed == -1 && isValidGuess != -1) {
            guessesLeft -= 1;

            // when they have three or less guesses remaining, the # turns red
            if (guessesLeft < 4) {
                $("#Remaining").css({ "color": "red" });
            }
            writeToRemaining.innerHTML = guessesLeft;
        }

        // if letter has not been guessed yet, add it to lettersGuessed array
        if (alreadyGuessed == -1 && isValidGuess != -1) {
            lettersGuessed.push(currentGuess);
        }

        // phrase turns green once solved
        if (numberCorrect == winningPhrase.length) {
            $('#Phrase').css({ "color": "green" });
            gameWon = true;
        }

        fixedPhrase = onScreenPhrase.join(" ");
        writeToPhrase.innerHTML = fixedPhrase;
        writeToGuessed.innerHTML = lettersGuessed;

        checkWinner(gameWon);
        checkLoser(guessesLeft);

    }
    // new game button  
    $("#newGame").on('click', function () {
        newGame();
    });
}
