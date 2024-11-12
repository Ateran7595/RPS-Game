const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const humScore = document.getElementById('humScore');
const compScore = document.getElementById('compScore');
let humanChoice = "";

function getComputerChoice(){
    let compChoice = Math.round(Math.random() *2) +1;
    let result = "";
    if(compChoice === 1){
        result = "rock";
    }
    else if(compChoice === 2){
        result = "paper";
    }
    else{
        result = "scissors"
    }
    return result;
}

rockBtn.addEventListener('click', () =>{
    playRound('rock', getComputerChoice());
})

paperBtn.addEventListener('click', () =>{
    playRound('paper', getComputerChoice());

})

scissorsBtn.addEventListener('click', () =>{
    playRound('scissors', getComputerChoice());
})

let humanScore = 0;
let computerScore = 0;
humScore.textContent = 'Human Score: '+ humanScore;
compScore.textContent = "Computer Score: "+ computerScore;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert("That was tie! let's go again!");
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper")){
                alert("One point for you");
                humanScore += 1;
                humScore.innerText = 'Human Score: '+ humanScore;
    }
    else{
        alert("Computer gets one point :(");
        computerScore += 1;
        compScore.innerText = "Computer Score: "+ computerScore;
    }

    if (humanScore === 5) {
        alert("Player Wins!!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Computer Wins! :/");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humScore.textContent = 'Human Score: '+ humanScore;
    compScore.textContent = "Computer Score: "+ computerScore;
}