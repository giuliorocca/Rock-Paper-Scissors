// Initialize win states, which will be updated to true/false as each round is played
let playerWins = null;
let computerWins = null;

// Initialize scores, which will be updated as each round is played
let playerScore = 0;
let computerScore = 0;

// Initialize audio files, which will be played each round
let audioWin = new Audio('win.mp3');
let audioLose = new Audio('lose.mp3');

// Make computer randomly choose from: rock, paper, scissors
function getComputerChoice() {
    let choiceArray = ['rock', 'paper', 'scissors']
    // Generate a random number 0 > x < 1 with Math.random()
    // Multiply by the array length using the .length method on the array
    // Round down to nearest integer with Math.floor()
    // Returns random integer from [0, 1, 2], which corresponds to the index value of the array  
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

// Determine winner each round based on outcomes table
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
  
// Initialize new paragraph element that will show the player/computer choice
const summarydiv = document.getElementById('summarydiv');
const summarydivcontent = document.createElement('p');

// Initialize new paragraph element that will show the round outcome
const outcomediv = document.getElementById('outcomediv');
const outcomedivcontent = document.createElement('p');

// Initialize new paragraph element that will show the score
const scorediv = document.getElementById('scorediv');
const scoredivcontent = document.createElement('p');

// Create functions that are passed into EventListeners for the images
function playerRock () {
    playGame('rock', getComputerChoice());
}
function playerPaper () {
    playGame('paper', getComputerChoice());
}
function playerScissors () {
    playGame('scissors', getComputerChoice());
}

// Invoke function with rock as argument when player clicks rock image
const rockImage = document.getElementById('rockImage');
rockImage.addEventListener('click', playerRock);

// Invoke function with paper as argument when player clicks paper image
const paperImage = document.getElementById('paperImage');
paperImage.addEventListener('click', playerPaper);

// Invoke function with scissors as argument when player clicks scissors image
const scissorsImage = document.getElementById('scissorsImage');
scissorsImage.addEventListener('click', playerScissors);

// Play one round of the game and keep score
function playGame (playerSelection, computerSelection) {
        
    if (playerWins === true) {
        playerScore++;
        audioWin.play();
    } 
    if (computerWins === true) {
        computerScore++;
        audioLose.play();
    }
    if (playerScore === 5 || computerScore === 5 && playerScore > computerScore) {
            alert('You win')
    }
    if (playerScore === 5 || computerScore === 5 && playerScore < computerScore) {
            alert('You lose')
    }    

    // Add text showing the player/computer choices in the newly created paragraph element
    summarydivcontent.textContent = `You played ${playerSelection} and computer played ${computerSelection}`;
    summarydiv.appendChild(summarydivcontent);

    // Add text showing the round outcome in the newly created paragraph element
    outcomedivcontent.textContent = playRound(playerSelection, computerSelection);
    outcomediv.appendChild(outcomedivcontent);
        
    // Add text showing score in newly created paragraph element
    scoredivcontent.textContent = `Player Score ${playerScore} Computer Score ${computerScore}`;
    scorediv.appendChild(scoredivcontent);
}