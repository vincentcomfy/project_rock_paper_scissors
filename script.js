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