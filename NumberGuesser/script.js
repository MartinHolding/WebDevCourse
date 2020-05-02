let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor((Math.random()*9));

const compareGuesses = (humanGuess, computerGuess, target) => {
    diffHuman = Math.abs(humanGuess-target);
    diffComputer = Math.abs(computerGuess-target);
    if (diffHuman <= diffComputer) {
        return true;
    }else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1; 
    }else {
        computerScore +=1;
    }
}
const advanceRound = () => currentRoundNumber +=1;