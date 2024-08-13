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

const container = document.querySelector("#container");
const playAgainBtn = document.createElement("button");
playAgainBtn.textContent = "Click to reset game";

const humanChoiceText = document.querySelector("#human-choice");
const compChoiceText= document.querySelector("#computer-choice");
const startPhrase= document.querySelector("#start-phrase");

function endGame() {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (humanScore == 5) {
                alert("Human Wins!");
                startPhrase.textContent = "Human Won!";
            }
            else if (computerScore == 5) {
                alert("Computer Wins!");
                startPhrase.textContent = "Computer Won!";
            }

        });
    });
        
    container.appendChild(playAgainBtn);
    playAgainBtn.addEventListener ('click', () => {
        resetGame();
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    humanChoiceText.textContent = "Human chooses: "
    compChoiceText.textContent = "Computer chooses: "

    scoreText.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
    startPhrase.textContent = "First to 5 wins!";
    container.removeChild(playAgainBtn);
    
}


function playRound (humanChoice, computerChoice) {

    humanChoiceText.textContent = "Human chooses: " + humanChoice;
    compChoiceText.textContent = "Computer chooses: " + computerChoice;

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

function playGame(humanSelection) {

    //const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log (humanSelection + " vs. " + computerSelection);
    playRound(humanSelection, computerSelection);
    console.log ("Human Score: " + humanScore + " Computer Score: " + computerScore);
    scoreText.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;

    if (humanScore == 5 || computerScore == 5) {
        endGame();
    }
         
    //alert ("Final Score - Human: " + humanScore + " Computer: " + computerScore)
}

/******* This is the UI for the rps game *******/

const scoreText = document.querySelector("#score");
scoreText.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;


/* 3 buttons for each selection (rps) */
const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const scissorBtn = document.querySelector("#scissor-button");

rockBtn.addEventListener ('click', () => {
    if (humanScore < 5 && computerScore < 5)
    {
        playGame("rock");
    }
    
});
paperBtn.addEventListener ('click', () => {
    
    if (humanScore < 5 && computerScore < 5)
    {
        playGame("paper");
    }
});
scissorBtn.addEventListener ('click', () => {
    
    if (humanScore < 5 && computerScore < 5)
    {
        playGame("scissors");
    }
});