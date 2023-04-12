// function getComputerChoice() {
//     const computerSelection = ['rock', 'paper', 'scissors'];
//     return computerSelection[Math.floor(Math.random() * 3)];
//   }
  
//   function isValidChoice(choice) {
//     return choice === 'rock' || choice === 'paper' || choice === 'scissors';
//   }
  
//   function playRound(playerSelection, computerSelection) {
//     const rules = {
//       rock: 'scissors',
//       paper: 'rock',
//       scissors: 'paper',
//     };
  
//     if (playerSelection === computerSelection) {
//       return "It's a tie! Try again!";
//     }
  
//     if (rules[playerSelection] === computerSelection) {
//       return 'Player wins!';
//     } else {
//       return 'Computer wins!';
//     }
//   }
  
//   let playerSelection = prompt('What is your choice?');
//   playerSelection = playerSelection.toLowerCase();
  
//   while (!isValidChoice(playerSelection)) {
//     alert('Invalid choice. Please enter rock, paper, or scissors.');
//     playerSelection = prompt('What is your choice?');
//     playerSelection = playerSelection.toLowerCase();
//   }
  
//   const computerSelection = getComputerChoice();
//   console.log('Player choice:', playerSelection);
//   console.log('Computer choice:', computerSelection);
//   console.log(playRound(playerSelection, computerSelection));
  