
window.onload = function () {

    // winning phrases array
    var phrase = ["Hydrogen",
        "Helium",
        "Lithium",
        "Beryllium",
        "Boron",
        "Carbon",
        "Nitrogen",
        "Oxygen",
        "Fluorine",
        "Neon",
        "Sodium",
        "Magnesium",
        "Aluminium",
        "Silicon",
        "Phosphorus",
        "Sulfur",
        "Chlorine",
        "Argon",
        "Potassium",
        "Calcium",
        "Scandium",
        "Titanium",
        "Vanadium",
        "Chromium",
        "Manganese",
        "Iron",
        "Cobalt",
        "Nickel",
        "Copper",
        "Zinc",
        "Gallium",
        "Germanium",
        "Arsenic",
        "Selenium",
        "Bromine",
        "Krypton",
        "Rubidium",
        "Strontium",
        "Yttrium",
        "Zirconium",
        "Niobium",
        "Molybdenum",
        "Technetium",
        "Ruthenium",
        "Rhodium",
        "Palladium",
        "Silver",
        "Cadmium",
        "Indium",
        "Tin",
        "Antimony",
        "Tellurium",
        "Iodine",
        "Xenon",
        "Cesium",
        "Barium",
        "Lanthanum",
        "Cerium",
        "Praseodymium",
        "Neodymium",
        "Promethium",
        "Samarium",
        "Europium",
        "Gadolinium",
        "Terbium",
        "Dysprosium",
        "Holmium",
        "Erbium",
        "Thulium",
        "Ytterbium",
        "Lutetium",
        "Hafnium",
        "Tantalum",
        "Tungsten",
        "Rhenium",
        "Osmium",
        "Iridium",
        "Platinum",
        "Gold",
        "Mercury",
        "Thallium",
        "Lead",
        "Bismuth",
        "Polonium",
        "Astatine",
        "Radon",
        "Francium",
        "Radium",
        "Actinium",
        "Thorium",
        "Protactinium",
        "Uranium",
        "Neptunium",
        "Plutonium",
        "Americium",
        "Curium",
        "Berkelium",
        "Californium",
        "Einsteinium",
        "Fermium",
        "Mendelevium",
        "Nobelium",
        "Lawrencium",
        "Rutherfordium",
        "Dubnium",
        "Seaborgium",
        "Bohrium",
        "Hassium",
        "Meitnerium",
        "Darmstadtium",
        "Roentgenium",
        "Copernicium",
        "Nihonium",
        "Flerovium",
        "Moscovium",
        "Livermorium",
        "Tennessine",
        "Oganesson"];

    // pick the target phrase, make it all lower case
    var winningPhrase = phrase[Math.floor(Math.random() * phrase.length)];
    winningPhrase = winningPhrase.toLocaleLowerCase();

    // create array of "_" that matches length of target phrase
    var onScreenPhrase = [];
    for (i = 0; i < winningPhrase.length; i++) {
            onScreenPhrase[i] = "_";      
    }
    var fixedPhrase = onScreenPhrase.join(" ");

    var guessesLeft = 10;
    var lettersGuessed = [];

    // setup the game
    var writeToPhrase = document.getElementById("Phrase");
    writeToPhrase.innerHTML = fixedPhrase;

    var writeToRemaining = document.getElementById("Remaining");
    writeToRemaining.innerHTML = "Guesses remaining: " + guessesLeft;

    writeToGuessed = document.getElementById("Guessed");
    writeToGuessed.innerHTML = "Letters guessed: " + lettersGuessed;

    document.onkeydown = function (event) {
        var currentGuess = event.key
        var containsCorrect = false;
        var alreadyGuessed;

        for (i = 0; i < winningPhrase.length; i++) {

            // correct guess event
            if (currentGuess == winningPhrase[i]) {
                onScreenPhrase[i] = winningPhrase[i];
                containsCorrect = true;
                numberCorrect++;
            }
        }

        if (containsCorrect == false) {
            guessesLeft -= 1;
            writeToRemaining.innerHTML = "Guesses remaining: " + guessesLeft;
        }

        alreadyGuessed = lettersGuessed.indexOf(currentGuess);

        // incorrect guess: deduct one from remaining guesses
        if (alreadyGuessed == -1) {
            lettersGuessed.push(currentGuess);
            writeToGuessed.innerHTML = lettersGuessed;
        }

        // game over event
        if (guessesLeft == 0) {
            alert("GAME OVER");
        }

        // update viewport on each key press
        fixedPhrase = onScreenPhrase.join(" ");
        writeToPhrase.innerHTML = fixedPhrase;

        console.log(onScreenPhrase);

    };



}




