/* Psuedo Code
Prompt the user to select rock, paper, or scissors
Generate a random number that is associated with rock
    paper or scissors
Create a choice for the computer
Compare the selection of the user and the computer
Assign win/loss counter
*/

let userChoice;
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

/*
if (computerChoice = 1) {
    let computerOutput = "Rock";
} else if (computerChoice = 2) {
    let computerOutput = "Scissors"
} else {
    let computerOutput = "Paper"
}
return computerOutput;
} */