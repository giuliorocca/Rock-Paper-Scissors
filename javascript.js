// Make computer randomly choose strategy: rock, paper, or scissors
function getComputerChoice() {
    let choiceArray = ['rock', 'paper', 'scissors']
    // Generate a random number 0>x<1 with Math.random()
    // Multiply by the array length with choiceArray.length
    // Round down to nearest integer with Math.floor()
    // Return random integers [0, 1, 2], which match index values of array  
    let randomChoice = Math.floor((Math.random()*choiceArray.length));
    //console.log(randomChoice);
    if (randomChoice === 0) {
        computerSelection = choiceArray[0]; 
    } else if (randomChoice === 1) {
        computerSelection = choiceArray[1];
    } else if (randomChoice === 2) {
        computerSelection = choiceArray[2];
    }
    return computerSelection;
}

// Determine win or loss based on outcomes table
function playGame (player, computer) {
    switch (true) {
        case player === 'rock' && computer === 'scissors':
            playerWins = true;
            return ('You win. Rock beats scissors.');
        case player === 'rock' && computer === 'rock':
            return ('Tie. Rock ties with rock.');
        case player === 'rock' && computer === 'paper':
            computerWins = true;
            return ('You lose. Paper beats rock.');
        case player === 'paper' && computer === 'scissors':
            computerWins = true;
            return ('You lose. Scissors beats paper.');
        case player === 'paper' && computer === 'rock':
            playerWins = true;
            return ('You win. Paper beats rock.');
        case player === 'paper' && computer === 'paper':
            return ('Tie. Paper ties with paper.');  
        case player === 'scissors' && computer === 'scissors':
            return ('Tie. Scissors ties with scissors.');
        case player === 'scissors' && computer === 'rock':
            computerWins = true;
            return ('You lose. Rock beats scissors.');
        case player === 'scissors' && computer === 'paper':
            playerWins = true;
            return ('You win. Scissors beats paper.');
    }
}

// Play the game 5 times and track score
function game () {
    for (let i = 0; i < 5; i++) {
        
        getComputerChoice()
        let playerChoice = prompt ('To play, type: rock, paper, or scissors');
        let playerSelection = playerChoice.toLowerCase();
        let playerScore = 0;
        let computerScore = 0;
        
        playGame(playerSelection, computerSelection);
        
        if (playerWins = true) {
            playerScore++;
        }
        if (computerScore = true) {
            computerScore++;
        }
        
        console.log(playerSelection, computerSelection);
        console.log(playGame(playerSelection, computerSelection));
        console.log(playerScore, computerScore);
    }
}

game()
