//keeps track of scores and number of current round
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//creates the secret number
let generateTarget = () => {
    return Math.floor(Math.random() * 10);
  };
  
let secretTargetNumber = generateTarget();

//calculates the differences between the user's and computer's guesses to the secret number
let userDifference = (userGuess, secretTargetNumber) => {
    return Math.abs(userGuess - secretTargetNumber); 
  };
  
let computerDifference = (computerGuess, secretTargetNumber) => {
    return Math.abs(computerGuess - secretTargetNumber); 
  };

//compares the differences in guesses to calculate the winner
let compareGuesses = (userDifference, computerDifference) => {
    if (userDifference === computerDifference) {
    return true;
    } else if (computerDifference > userDifference) {
      return true;
    } else {
      return false;
    }
  };

//assigns user and computer differences functions to variables
  const udNum = userDifference(6, secretTargetNumber);
  const cdNum = computerDifference(8, secretTargetNumber);

//updates the score of the winner
let updateScore = (winner) => {
    if (winner === 'human') {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
  };

//adds one to the round count variable
let advanceRound = () => {
    currentRoundNumber += 1;
  };
  
