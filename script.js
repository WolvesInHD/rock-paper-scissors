/* Psuedo Code
Prompt the user to select rock, paper, or scissors
Generate a random number that is associated with rock
    paper or scissors
Create a choice for the computer
Compare the selection of the user and the computer
Assign win/loss counter
*/

/*Computer choice randomizaton */

let computerOutput;
let humanScore;
let computerScore;
let userChoice;
let roundCount;

computerScore = 0; 
humanScore = 0;
roundCount = 0;

let result;
function playRound(userChoice, computerOutput) {
    
    function randomSelection (min, max) {
        return Math.round(Math.random() * (3 - 1) + 1)
    }
    if (randomSelection(1, 3) == 1) {
        computerOutput = "rock"
    } else if (randomSelection (1, 3) == 2) {
        computerOutput = "paper"
    } else {
        computerOutput = "scissors"
    };

    let userPrompt = prompt ("Select your choice! Rock, Paper, or Scissors?");
    userChoice = userPrompt.toLowerCase();

    if (userChoice == computerOutput) {
        result = "It's a tie!";
        alert(result);
    } else if (userChoice == "rock" && computerOutput == "paper") {
        computerScore++
        roundCount++
        result = "The computer wins this time!";
        alert(result);
    } else if (userChoice == "rock" && computerOutput == "scissors") {
        humanScore++
        roundCount++
        result = "You win! Congrats!";
        alert(result);
    } else if (userChoice == "scissors" && computerOutput == "rock") {
        computerScore++
        roundCount++
        result = "The computer wins this time!";
        alert(result);
    } else if (userChoice == "scissors" && computerOutput == "paper") {
        humanScore++
        roundCount++
        result = "You win! Congrats!";
        alert(result);
    } else if (userChoice == "paper" && computerOutput == "scissors") {
        computerScore++
        roundCount++
        result = "The computer wins this time!";
        alert(result);
    } else if (userChoice == "paper" && computerOutput == "rock") {
        humanScore++
        roundCount++
        result = "You win! Congrats!";
        alert(result);
    } else {
        result = "Error! Try again!"
        alert("Error! Try again!")
    }
}

for (let i = 0; i < 6; roundCount++) {
    playRound(userChoice, computerOutput);
    console.log(result);
    console.log("Your score is " + humanScore);
    console.log("The computer score is " + computerScore);
    console.log("That was round " + roundCount);
    if (humanScore == 5 || computerScore == 5) {
        alert("GAME OVER!")
        break;
    }
}
