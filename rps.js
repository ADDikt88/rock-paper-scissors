console.log ("Hello World");

function getComputerChoice() {
    const results = ["rock","paper","scissors"]
    return results[Math.floor(Math.random()*3)]
}

/*console.log(getComputerChoice());*/

function getHumanChoice() {
    return prompt ("Enter your choice: ");
}

/*console.log(getHumanChoice());*/

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {

    if (humanChoice.toLowerCase() == 'rock') {
        if (computerChoice == 'scissors') {
            humanScore++;
            return;
        }
        else if (computerChoice == 'paper') {
            computerScore++;
            return;
        }
        else {
            return;
        }
    }

    if (humanChoice.toLowerCase() == 'paper') {
        if (computerChoice == 'rock') {
            humanScore++;
            return;
        }
        else if (computerChoice == 'scissors') {
            computerScore++;
            return;
        }
        else {
            return;
        }
    }

    if (humanChoice.toLowerCase() == 'scissors') {
        if (computerChoice == 'paper') {
            humanScore++;
            return;
        }
        else if (computerChoice == 'rock') {
            computerScore++;
            return;
        }
        else {
            return;
        }
    }
}



function playGame() {

    let i = 0;

    alert("Let's play 5 rounds of rock paper scissors");
    while (i < 5)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log (humanSelection + " vs. " + computerSelection);
        playRound(humanSelection, computerSelection);
        
        i++;
            
    }
    alert ("Final Score - Human: " + humanScore + " Computer: " + computerScore)
}

playGame();