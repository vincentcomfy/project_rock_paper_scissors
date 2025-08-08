# project_rock_paper_scissors
This repo is my working example of the Odin Project's "Rock Paper Scissors" project https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
This game is designed to be played in the console (but where's the fun in that?)

Objectives:
- Set up a git project [done]

Write the logic to get the computerChoice
-   write the pseudocode [done]
-   write the function
-   test the function returns the correct values

Write the logic to get the humanChoice
-   write the pseudocode
-   write the function
test the function returns the correct values

Track score
- write the pseudocode to track the score of the computer and human
- write a function that that holds variables that hold the score and initialize with 0

Write the logic to play a single round
- Write the pseudocode for a function that takes the returned values from computerChoice and humanChoice as arguments
- Ensure that the input from a human accounts for any undesired variance, such as capitalization, blank values, out of range arguments etc.
- Write the logic to compare the human and computer arguments and declarea a winner. Have this increment playRound

Write the logic to play the entire game
- Move the playRound function and score so they are declared within a playGame function that calls playRound to play 5 rounds, keeps track of the score and declares a winner at the end.