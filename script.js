console.log("Welcome to the game of Rock Paper Scissors");

let humanScore = 0;
let computerScore = 0;
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choices[Math.round(Math.random() * 2)].toLowerCase();
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, Scissors?");
  return humanChoice ? humanChoice.toLowerCase() : "";
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("That's a Draw! Play again");
    } else {
      if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
      } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
      } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
      } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
      } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
      } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
      }
    }
    console.log(
      `Your score: `,
      humanScore,
      `Computer's score: `,
      computerScore
    );

    return humanScore, computerScore;
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(
      `Your choice: `,
      humanSelection,
      ` | Computer's choice: `,
      computerSelection
    );
    playRound(humanSelection, computerSelection);
  }
}

playGame();
if (humanScore > computerScore) {
  console.log("You are the winner!");
} else if (humanScore == computerScore) {
  console.log("That's a Draw! Play again");
} else {
  console.log("Computer is the winner! Better luck next time.");
}
