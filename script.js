console.log("Welcome to the game of Rock Paper Scissors");

let humanScore = 0;
let computerScore = 0;
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choices[Math.round(Math.random() * 2)].toLowerCase();
}
const resultsDiv = document.querySelector("#results");
const currentStatus = document.querySelector("#scores");

function playGame() {
  function playRound(humanChoice, computerChoice) {
    const runningScore = document.createElement("h3");
    if (humanChoice == computerChoice) {
      runningScore.textContent = "That's a Draw! Play again";
    } else {
      if (humanChoice == "rock" && computerChoice == "paper") {
        runningScore.textContent = "You lose! Paper beats Rock";
        computerScore++;
      } else if (humanChoice == "paper" && computerChoice == "scissors") {
        runningScore.textContent = "You lose! Scissors beats Paper";
        computerScore++;
      } else if (humanChoice == "scissors" && computerChoice == "rock") {
        runningScore.textContent = "You lose! Rock beats Scissors";
        computerScore++;
      } else if (humanChoice == "rock" && computerChoice == "scissors") {
        runningScore.textContent = "You win! Rock beats Scissors";
        humanScore++;
      } else if (humanChoice == "paper" && computerChoice == "rock") {
        runningScore.textContent = "You win! Paper beats Rock";
        humanScore++;
      } else if (humanChoice == "scissors" && computerChoice == "paper") {
        runningScore.textContent = "You win! Scissors beats Paper";
        humanScore++;
      }
    }
    console.log(
      `Your score: `,
      humanScore,
      `Computer's score: `,
      computerScore
    );
    currentStatus.appendChild(runningScore);

    // return humanScore, computerScore;
    resultsDiv.textContent =
      "Your score: " + humanScore + " | Computer's score: " + computerScore;
    if (humanScore == 5 || computerScore == 5) {
      if (humanScore > computerScore) {
        resultsDiv.textContent = "You are the winner!";
      } else if (humanScore == computerScore) {
        resultsDiv.textContent = "That's a Draw! Play again";
      } else {
        resultsDiv.textContent =
          "Computer is the winner! Better luck next time.";
      }
      humanScore = 0;
      computerScore = 0;
    }
  }
  // const humanSelection = getHumanChoice();

  const button = document.querySelectorAll("button");
  button.forEach((userItem) => {
    userItem.addEventListener("click", () => {
      let humanSelection = userItem.textContent.toLowerCase();
      const computerSelection = getComputerChoice();

      currentStatus.textContent = "Computer's choice: " + computerSelection;
      playRound(humanSelection, computerSelection);
    });
  });
}

playGame();
