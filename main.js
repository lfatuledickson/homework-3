// Coinflip simulator

let userChoice;
let randomNumber;
let computerChoice;
let coinResult;

userChoice = prompt("This is a coinflip challenge: Please enter \"1\" for \"Heads\" or \"0\" for \"Tails\".");

if (userChoice == 0 || userChoice == 1) {
    computerChoice = 1 - userChoice;

randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 1) {
        coinResult = "HEADS";
    }
    else {
        coinResult = "TAILS";
    }

    if (randomNumber == userChoice) {
        alert("Congratulations, the coin landed on " + coinResult + ", you have won! Luck is on your side!");
    }

    else if (randomNumber == computerChoice) {
    alert("Too bad, the coin landed on " + coinResult + ". The coin sided with the computer this time...");
    }
}
else {
    alert("I said 0 or 1! Don't give me anything else you clown!");
}

// Age confirmation

let birthYear = prompt("We need to confirm that you are 21 years or older to drink. Please enter your age below.");

if (birthYear < 21) {
       alert("We are sorry. You are not old enough for drinking in the U.S.");
   }
else if (birthYear == 21) {
    alert("You are barely old enogh to drink in the U.S.")
}
else if (birthYear > 21) {
       alert("You are old enough to drink in the U.S.");
   }
