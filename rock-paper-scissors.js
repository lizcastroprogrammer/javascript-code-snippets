
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      return 'That choice is not available';
    }
  }
  
  
  
  
  const getComputerChoice = () => {
    wholeNumber = Math.floor(Math.random() * 3);
    if (wholeNumber === 0) {
      return 'rock';
    } else if (wholeNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  //console.log(getComputerChoice());
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return 'You win by cheating!';
    } else if (userChoice === computerChoice) {
      return 'It is a tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'The user won!';
      }
    } else if (userChoice === 'paper') {
       if (computerChoice === 'scissors') {
        return 'The computer won!'; 
       } else {
        return 'The user won!';
      }
    } else if (userChoice === 'scissors') {
       if (computerChoice === 'rock') {
        return 'The computer won!'; 
       } else {
        return 'The user won!';
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
  
    console.log(determineWinner(userChoice, computerChoice));
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  };
  
  playGame();