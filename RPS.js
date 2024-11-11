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

function getHumanChoice(){
    let humanChoice = prompt().toLowerCase();

    if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        return humanChoice;
    }
    else{
        alert("Please input 'Rock', 'Paper' or 'Scissors'")
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert("That was tie! let's go again!")
        return;
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        alert("One point for you");
        humanScore += 1;
    }
    else{
        alert("Computer gets one point :(");
        computerScore += 1;
    }
}

function playGame(){
    while (humanScore < 5 && computerScore < 5) {
        let computerChoice = getComputerChoice();
        console.log("A little cheat cheat for you ;)... Computer choice:", computerChoice);
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }

    if(humanScore === 5){
        alert("Player Wins!!");
    }
    else if(computerScore === 5){
        alert("Computer Wins! :/");
    }
}

alert("We'll play until one gets 5 points ;)")
playGame();
alert("Please refresh page to play again!");