// Initialize win states, which will be updated to true/false as each round is played
let playerWins = null;
let computerWins = null;

// Initialize scores, which will be updated as each round is played
let playerScore = 0;
let computerScore = 0;

// Initialize audio file, which will play each round
let audio = new Audio('audio.mp3');

// Initialize blank html element that will show player/computer choice
const summarydiv = document.getElementById('summarydiv');
const summarydivcontent = document.createElement('p');

// Initialize blank html element that will show round outcome
const outcomediv = document.getElementById('outcomediv');
const outcomedivcontent = document.createElement('p');

// Initialize blank html element that will show score
const scorediv = document.getElementById('scorediv');
const scoredivcontent = document.createElement('p');

// Initialize blank html element that will show end result
const enddiv = document.getElementById('enddiv');
const enddivcontent = document.createElement('p');

// Make computer randomly choose from: rock, paper, scissors
function getComputerChoice() {
    const choiceArray = ['rock', 'paper', 'scissors']
    // Generate a random number 0 > x < 1 with Math.random()
    // Multiply by the array length using the .length method on the array
    // Round down to nearest integer with Math.floor()
    // Return random integer from [0, 1, 2], which corresponds to the index value of the array  
    const randomArrayIndexValue = Math.floor((Math.random()*choiceArray.length));
    const computerChoice = choiceArray[randomArrayIndexValue];
    return computerChoice;
}

// Create functions that are passed into click EventListeners on images
function playerRock () {
    playRound('rock', getComputerChoice());
}
function playerPaper () {
    playRound('paper', getComputerChoice());
}
function playerScissors () {
    playRound('scissors', getComputerChoice());
}

// Invoke functions with appropriate argument for playRound() using EventListeners on images
const rockImage = document.getElementById('rockImage');
rockImage.addEventListener('click', playerRock);

const paperImage = document.getElementById('paperImage');
paperImage.addEventListener('click', playerPaper);

const scissorsImage = document.getElementById('scissorsImage');
scissorsImage.addEventListener('click', playerScissors);

// Determine winner of each round based on outcomes table
function playRound (playerChoice, computerChoice) {
    
    // Reset game if player or computer reaches 5 points
    if (playerScore === 5 || computerScore === 5) {
        
        // Hide the prior game's info in the created divs
        const div1 = document.getElementById("summarydiv");
        div1.style.display === "none";

        const div2 = document.getElementById("outcomediv");
        div2.style.display === "none";

        const div3 = document.getElementById("scorediv");
        div3.style.display === "none";

        const div4 = document.getElementById("enddiv");
        div4.style.display === "none";

        // Reset scores and win states
        playerScore = 0;
        computerScore = 0;
        playerWins = null;
        computerWins = null;
    }

    audio.play();
    
    switch(playerChoice) {
        // Determine who wins when player picks rock
        case 'rock':
            if (computerChoice === 'scissors') {
                playerWins = true;
                computerWins = false;
                playerScore++;
                outcome = 'You win. Rock beats scissors.';
            }

            if (computerChoice === 'rock') {
                playerWins = false;
                computerWins = false;
                outcome = 'Tie. Rock ties with rock.';
            } 
            
            if (computerChoice === 'paper') {
                playerWins = false;
                computerWins = true;
                computerScore++;
                outcome = 'You lose. Paper beats rock.';
            }

        // Determine who wins when player picks paper
        case 'paper':
            if (computerChoice === 'scissors') {
                playerWins = false;
                computerWins = true;
                computerScore++;
                outcome = 'You lose. Scissors beats paper.';
            }

            if (computerChoice === 'rock') {
                playerWins = true;
                computerWins = false;
                playerScore++;
                outcome = 'You win. Paper beats rock.';
            } 
            
            if (computerChoice === 'paper') {
                playerWins = false;
                computerWins = false;
                outcome = 'Tie. Paper ties paper.';
            }    

        // Determine who wins when player picks scissors
        case 'scissors':
            if (computerChoice === 'scissors') {
                playerWins = false;
                computerWins = false;
                outcome = 'Tie. Scissors ties scissors.';
            }

            if (computerChoice === 'rock') {
                playerWins = false;
                computerWins = true;
                computerScore++;
                outcome = 'You lose. Rock beats scissors.';
            } 
            
            if (computerChoice === 'paper') {
                playerWins = true;
                computerWins = false;
                playerScore++;
                outcome = 'You win. Scissors beats paper.';
            }           
    }
     // Create text in new div showing player/computer choices
    summarydivcontent.textContent = `You played ${playerChoice} and computer played ${computerChoice}`;
    summarydiv.appendChild(summarydivcontent);
        
    // Create text in new div showing round outcome
    outcomedivcontent.textContent = outcome;
    outcomediv.appendChild(outcomedivcontent);
                        
    // Create text in new div showing score
    scoredivcontent.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    scorediv.appendChild(scoredivcontent);

    // Create text in new div showing end result
    if (playerScore === 5) {
        enddivcontent.textContent = 'Amazing, you won!';
        enddiv.appendChild(enddivcontent);
    }
    if (computerScore === 5) {
        enddivcontent.textContent = 'Shucks, you lost!';
        enddiv.appendChild(enddivcontent);
    }
}