var compChoice = ["a", "b", "c"]

// "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o","p", "q", "r", 
// "s","t", "u","v","w", "x", "y", "z",];

// var userGuess = []
// , "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o","p", "q", "r", 
// "s","t", "u","v","w", "x", "y", "z",];

// main parts of game ie the game counter, the computer guess and the human selection 
var userGuess = ""
var guessesLeftCount = 3
var wins = 0
var winsHTML = document.getElementById("wins")
var guessesLeftHTML = document.getElementById('guesses-left')
guessesLeftHTML.textContent = guessesLeftCount

// this is where the computer selects between abc on the compChoice array
var computerPick = compChoice[Math.floor(Math.random() * compChoice.length)];
console.log(computerPick)

// this is the game reset starts counter back to 3 and blanks out the human click and the computer guess
function resetGame() {
    userGuess = ""
    guessesLeftCount = 3
    computerPick = compChoice[Math.floor(Math.random() * compChoice.length)];
    guessesLeftHTML.textContent = guessesLeftCount
}

// this is where the it records the humans selection of a button and subtracts one from the guesses left count and adds one to the win count and the guess counter goes down one
// when the guess counter id zero they lose
document.getElementById("a").addEventListener("click", function () {
    userGuess = "a"
    guessesLeftCount--
    guessesLeftHTML.textContent = guessesLeftCount
    console.log(userGuess)
    if (userGuess === computerPick) {
        alert("You won")
        wins++
        winsHTML.textContent = wins
        resetGame()
    }

    if (guessesLeftCount === 0) {
        alert("You lost")
        resetGame()
    }
});

document.getElementById("b").addEventListener("click", function () {
    userGuess = "b"
    guessesLeftCount--
    guessesLeftHTML.textContent = guessesLeftCount
    console.log(userGuess)
    if (userGuess === computerPick) {
        alert("You won")
        wins++
        winsHTML.textContent = wins
        resetGame()
    }

    if (guessesLeftCount === 0) {
        alert("You lost")
        resetGame()
    }
});

document.getElementById("c").addEventListener("click", function () {
    userGuess = "c"
    guessesLeftCount--
    guessesLeftHTML.textContent = guessesLeftCount
    console.log(userGuess)
    if (userGuess === computerPick) {
        alert("You won")
        wins++
        winsHTML.textContent = wins
        resetGame()
    }

    if (guessesLeftCount === 0) {
        alert("You lost")
        resetGame()
    }
});





//     // Define my Stats Variables; i.e., win, loss, guessesLeftCount 

//     document.onkeyup = function() {
//        var userGuess = String.fromCharCode(event.keyCode).toLowerCase;
//        console.log (userGuess);
//     }
//      var winsCounter =0;
//      var userGuessCounter =0;
//      var guessesLeftCounter = 9;


//     // list the instructions of the game example: Click A, B or C. Instructions have been imbedded in buttons on the html page.



//     // Computer is now picking one element of the above array randomly
//     var computerPick = compChoice[Math.floor(Math.random() * compChoice.length)];


//     // The user is pressing a button 
//  if
//      (compChoice==userGuess) {
//          winsCounter++
//          guessesLeftCounter-- 

//      }

// if (compChoice)

// We compare between the computer's pick and the user's input. 


// If the user's input matches the computer's pick, then the wins go by 1 up. 

// 





// if(userGuess == compGuess) {
//     wins++; 
//   }