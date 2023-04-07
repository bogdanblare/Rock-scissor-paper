const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultElem = document.getElementById("result");

const moves = ["rock", "paper", "scissors"];

function computerMove() {
  return moves[Math.floor(Math.random() * 3)];
}

function play(playerMove) {
  const computer = computerMove();

  if (playerMove === computer) {
    resultElem.textContent = "It's a tie!";
  } else if ((playerMove === "rock" && computer === "scissors") ||
             (playerMove === "paper" && computer === "rock") ||
             (playerMove === "scissors" && computer === "paper")) {
    resultElem.textContent = "You won!";
  } else {
    resultElem.textContent = "Computer won!";
  }
}

rockBtn.addEventListener("click", () => { play("rock"); });
paperBtn.addEventListener("click", () => { play("paper"); });
scissorsBtn.addEventListener("click", () => { play("scissors"); });
