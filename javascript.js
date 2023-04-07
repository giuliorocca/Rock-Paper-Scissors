let playerChoice = prompt ('To play, type: rock, paper, or scissors');
let playerSelection = playerChoice.toLowerCase();

function getComputerChoice() {
    let choiceArray = ['rock', 'paper', 'scissors']
    // Generate a random number 0>x<1 with Math.random()
    // Multiply by the array length with choiceArray.length
    // Round down to nearest integer with Math.floor()
    // Outcome: random integers [0, 1, 2], which matches index values of array  
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

function playGame (player, computer) {
    switch (true) {
        case player === 'rock' && computer === 'scissors':
            return ('You win. Rock beats scissors.');
            break;
        case player === 'rock' && computer === 'rock':
            return ('Tie. Rock ties with rock.');
            break;
        case player === 'rock' && computer === 'paper':
            return ('You lose. Paper beats rock.');  
            break;  
        case player === 'paper' && computer === 'scissors':
            return ('You lose. Scissors beats paper.');
            break;
        case player === 'paper' && computer === 'rock':
            return ('You win. Paper beats rock.');
            break;
        case player === 'paper' && computer === 'paper':
            return ('Tie. Paper ties with paper.');  
            break;  
        case player === 'scissors' && computer === 'scissors':
            return ('Tie. Scissors ties with scissors.');
            break;
        case player === 'scissors' && computer === 'rock':
            return ('You lose. Rock beats scissors.');
            break;
        case player === 'scissors' && computer === 'paper':
            return ('You win. Scissors beats paper.');
            break;
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        getComputerChoice()
        playGame(playerSelection, computerSelection);
        // initialize a counter for player, if player wins ++
        // initialize a counter for computer, if computer wins ++
        console.log(playerSelection, computerSelection);
        console.log(playGame(playerSelection, computerSelection));
    }
}

game()
