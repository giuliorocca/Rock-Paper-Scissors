// Initialize win states, which will be updated to true/false as each round is played
let playerWins = null;
let computerWins = null;

// Initialize scores, which will be updated as each round is played
let playerScore = 0;
let computerScore = 0;

// Make computer randomly choose: rock, paper, or scissors
function getComputerChoice() {
    let choiceArray = ['rock', 'paper', 'scissors']
    // Generate a random number 0 > x < 1 with Math.random()
    // Multiply by the array length using the .length method on the array
    // Round down to nearest integer with Math.floor()
    // Return random integer from [0, 1, 2], which corresponds to the index value of the array  
    let computerChoice = Math.floor((Math.random()*choiceArray.length));
    if (computerChoice === 0) {
        computerChoice = choiceArray[0]; 
    } else if (computerChoice === 1) {
        computerChoice = choiceArray[1];
    } else if (computerChoice === 2) {
        computerChoice = choiceArray[2];
    }   
    return computerChoice;
}

// Make player choose: rock, paper, or scissors
//function getPlayerChoice() {
//    let playerChoice = prompt ('To play, type: rock, paper, or scissors');
//    playerChoice = playerChoice.toLowerCase();
//    return playerChoice;
//}

// Determine win or loss each round based on outcomes table
function playRound (playerChoice, computerChoice) {

    switch(playerChoice) {

        // Determine who wins when player picks rock
        case 'rock':
            if (computerChoice === 'scissors') {
                playerWins = true;
                computerWins = false;
                return ('You win. Rock beats scissors.');
            }

            if (computerChoice === 'rock') {
                playerWins = false;
                computerWins = false;
                return ('Tie. Rock ties with rock.');
            } 
            
            if (computerChoice === 'paper') {
                playerWins = false;
                computerWins = true;
                return ('You lose. Paper beats rock.');
            }

        // Determine who wins when player picks paper
        case 'paper':
            if (computerChoice === 'scissors') {
                playerWins = false;
                computerWins = true;
                return ('You lose. Scissors beats paper.');
            }

            if (computerChoice === 'rock') {
                playerWins = true;
                computerWins = false;
                return ('You win. Paper beats rock.');
            } 
            
            if (computerChoice === 'paper') {
                playerWins = false;
                computerWins = false;
                return ('Tie. Paper ties paper.');
            }    

        // Determine who wins when player picks scissors
        case 'scissors':
            if (computerChoice === 'scissors') {
                playerWins = false;
                computerWins = false;
                return ('Tie. Scissors ties scissors.');
            }

            if (computerChoice === 'rock') {
                playerWins = false;
                computerWins = true;
                return ('You lose. Rock beats scissors.');
            } 
            
            if (computerChoice === 'paper') {
                playerWins = true;
                computerWins = false;
                return ('You win. Scissors beats paper.');
            }

    }
}
    
// Play one round of the game and keep score
function playGame (playerSelection, computerSelection) {

        playRound(playerSelection, computerSelection);
        
        if (playerWins === true) {
            playerScore++;
        } 
        if (computerWins === true) {
            computerScore++;
        }
        
        console.log(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore, computerScore);
    }

// Functions passed in button EventListeners that correspond to player choices
function playerRock () {
    playGame('rock', getComputerChoice());
}

function playerPaper () {
    playGame('paper', getComputerChoice());
}

function playerScissors () {
    playGame('scissors', getComputerChoice());
}

//Player presses 'rock' button
const rockButton = document.getElementById('rockButton');
rockButton.addEventListener('click', playerRock);

//Player presses 'paper' button
const paperButton = document.getElementById('paperButton');
paperButton.addEventListener('click', playerPaper);

//Player presses 'scissors' button
const scissorsButton = document.getElementById('scissorsButton');
scissorsButton.addEventListener('click', playerScissors);
