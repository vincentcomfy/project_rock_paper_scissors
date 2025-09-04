let computerScore = 0;
let humanScore = 0;

// Get Computer "choice"
// Generate a random number between 1-3, with each number corresponding to a choice (rock paper or scissors)
// Store this "choice" and return it as a variable.

function computerChoice() {
    let guess = Math.floor(Math.random() * 3) + 1; // 1–3

    if (guess === 1) {
        return "rock";
    } else if (guess === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(`The computer choice is ${computerChoice()}`);

// Prompt the player to enter their choice via a prompt() window
// Check their prompt is valid (i.e; is only one of 3 valid choices)
// Test the prompt to ensure that only the allowed value is entered and incorrect values are thrown away

function humanChoice() {
    let choice = prompt("Please enter your choice; Rock, Paper or Scissors");
    let cleaned = choice.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
    
    if (cleaned === "rock") {
        return "rock";
    } else if (cleaned === "paper") {
        return "paper";
    } else if (cleaned === "scissors") {
        return "scissors";
    } else {
        return "Invalid; Please enter either Rock, Paper or Scissors"
    }
}
let playerChoice = humanChoice();
console.log(`The human choice is ${playerChoice}`);


// Take the score from who wins the round - set up a comparison function that awards a point to a global variable for scorekeeping
function round() {
    let comp = computerChoice();
    let player = humanChoice();

    if (comp === player) {
        return "Draw! Try again.";
    }

    if (
        (comp === "rock" && player === "paper") ||
        (comp === "paper" && player === "scissors") ||
        (comp === "scissors" && player === "rock")
    ) {
        humanScore++;
        return "Player wins!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}
