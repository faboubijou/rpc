function getComputerChoice() {
    let choix = ["rock","paper","scissors"];
    let ind = Math.floor(Math.random()*choix.length);
    return choix[ind];
}

function playRound(playerSelection,computerSelection) {
    let resu = 3;
    if (playerSelection===computerSelection) {
        console.log("Draw : You both play " + playerSelection);
        resu = 0;
    } else if ((playerSelection==="rock" && computerSelection==="scissors") || (playerSelection==="scissors" && computerSelection==="paper") ||(playerSelection==="paper" && computerSelection==="rock")) {
        console.log("You win this round : " + playerSelection + " beats " + computerSelection);
        resu = 1;
    } else {
        console.log("You lose this round : " + computerSelection + " beats " + playerSelection);
        resu = 2;
    }
    return resu;
}

function game() {
    const victoire = 3;
    let userScore = 0;
    let computerScore = 0;
    let manche = 0;
    let resu;
    while (userScore<victoire && computerScore<victoire) {
        manche += 1;
        console.log("Rappel des scores :\n Votre score est de " + userScore + " et\n Le score de la machine est de " + computerScore);
        console.log("Debut de la manche numero " + manche)
        let playerSelection;
        while (playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissors") {
            console.log("You can choose 'rock', 'paper' or 'scissors'");
            playerSelection = prompt("What is your choice?");
            playerSelection = playerSelection.toLowerCase();
            if (playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissors") {
                console.log("This is not a possible choice! Try again");
            }
        }
        let computerSelection = getComputerChoice();
        let resuplay = playRound(playerSelection,computerSelection);
        if (resuplay===1) {
            userScore += 1;
        } else if (resuplay===2) {
            computerScore += 1;
        } 
    }
    if (userScore === 3) {
        resu = "Vous avez gagne";
    } else {
        resu = "Vous avez perdu";
    }
    return resu;
}