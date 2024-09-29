/* Psuedo Code
Prompt the user to select rock, paper, or scissors
Generate a random number that is associated with rock
    paper or scissors
Create a choice for the computer
Compare the selection of the user and the computer
Assign win/loss counter
*/

let computerOutput;

function randomSelection (min, max) {
    return Math.round(Math.random() * (3 - 1) + 1)
}

if (randomSelection(1, 3) == 1) {
    computerOutput = "Rock"
} else if (randomSelection (1, 3) == 2) {
    computerOutput = "Paper"
} else {
    computerOutput = "Scissors"
};

console.log(computerOutput)


let userPrompt = prompt ("Select your choice! Rock, Paper, or Scissors?");

let userChoice = userPrompt.toLowerCase();

console.log(userChoice);