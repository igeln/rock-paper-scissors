let playerSelection = '';

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => {
  playerSelection = 'rock';
  rockButton.classList.add('selected');
  paperButton.classList.remove('selected');
  scissorsButton.classList.remove('selected');
  runGame();
});

paperButton.addEventListener('click', () => {
  playerSelection = 'paper';
  rockButton.classList.remove('selected');
  paperButton.classList.add('selected');
  scissorsButton.classList.remove('selected');
  runGame();
});

scissorsButton.addEventListener('click', () => {
  playerSelection = 'scissors';
  rockButton.classList.remove('selected');
  paperButton.classList.remove('selected');
  scissorsButton.classList.add('selected');
  runGame();
});

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
    return 'Player wins!';
  } else {
    return 'Computer wins!';
  }
}

function runGame() {
  const computerSelection = getComputerChoice();
  console.log('Player choice:', playerSelection);
  console.log('Computer choice:', computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}
