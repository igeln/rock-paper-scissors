let playerWins = 0;
let computerWins = 0;

const roundResultDisplay = document.getElementById('round-result');
const gameStatusDisplay = document.getElementById('game-status');
const computerScoreDisplay = document.getElementById('computer-score');
const playerScoreDisplay = document.getElementById('player-score');
const resetButton = document.getElementById('reset-button');
const timerDisplay = document.getElementById('timer');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

function buttonClickListener(selection) {
  rockButton.classList.remove('selected');
  paperButton.classList.remove('selected');
  scissorsButton.classList.remove('selected');
  document.getElementById(selection).classList.add('selected');
  runGame(selection);
}

rockButton.addEventListener('click', () => buttonClickListener('rock'));
paperButton.addEventListener('click', () => buttonClickListener('paper'));
scissorsButton.addEventListener('click', () => buttonClickListener('scissors'));

function getComputerChoice() {
  const computerSelection = ['rock', 'paper', 'scissors'];
  return computerSelection[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  if (playerSelection === computerSelection) {
    return "It's a tie! Try again!";
  }

  if (rules[playerSelection] === computerSelection) {
    playerWins++;
    return 'Player wins!';
  } else {
    computerWins++;
    return 'Computer wins!';
  }
}

function checkWinner() {
  if (playerWins === 5) {
    return 'Player has won the game!';
  } else if (computerWins === 5) {
    return 'Computer has won the game!';
  } else {
    return '';
  }
}

function updateScoreDisplay() {
  computerScoreDisplay.textContent = `Computer Score: ${computerWins}`;
  playerScoreDisplay.textContent = `Player Score: ${playerWins}`;
}

function resetGame() {
  playerWins = 0;
  computerWins = 0;
  updateScoreDisplay();
  console.log('Game reset');
}

resetButton.addEventListener('click', resetGame);

function runGame(playerSelection) {
  if (playerWins < 5 && computerWins < 5) {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    roundResultDisplay.textContent = roundResult;
    updateScoreDisplay();
    const winner = checkWinner();
    if (winner) {
      gameStatusDisplay.textContent = winner;
      setTimeout(() => {
        resetGame();
        roundResultDisplay.textContent = '';
        gameStatusDisplay.textContent = '';
      }, 3000); // Automatically reset the game after 3 seconds
    }
  } else {
    gameStatusDisplay.textContent = 'The game is over. It will reset automatically.';
    setTimeout(() => {
      resetGame();
      roundResultDisplay.textContent = '';
      gameStatusDisplay.textContent = '';
    }, 3000);
  }
}