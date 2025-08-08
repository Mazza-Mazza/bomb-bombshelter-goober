function getComputerChoice(){

    const choice = Math.random();
    let actionC = null;

    //decides computer choice based on value
    if(choice < 0.33333){
        actionC = 'bomb';
    }
    else if(choice > 0.33333 && choice < 0.66666){
        actionC = 'bomb shelter';
    }
    else{
        actionC = 'goober';
    }
    //choice returned
    return actionC;
}

function getHumanChoice(){

    let actionH = prompt("Quick, what will you choose: Bomb, bomb shelter, or goober?");
    actionH = actionH.toLowerCase();

    //checks input (not a priority)
    if(actionH !== 'bomb' && actionH !== 'bomb shelter' && actionH !== 'goober'){
        actionH = 'bad input';
    }
    //choice returned
    return actionH;
}

let computerScore = 0;
let humanScore = 0;

function playGame(){

    //plays desired number of rounds
    let roundCount = prompt("How many rounds do you wish to play? Use a number.");
    for(let i = 0; i < roundCount; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
    }

    function playRound(computerChoice, humanChoice){

        //same choice
        if(computerChoice === humanChoice){
            console.log("Oh my, two " + humanChoice + "s! No winners!");
        }
        //human did not input an option
        else if(humanChoice === 'bad input'){
            console.log("You did not choose an option correctly, or perhaps not anything at all. You lose!");
            computerScore++;
        }

        else if(humanChoice === 'bomb'){
            if(computerChoice === 'bomb shelter'){
                console.log("The impenetrable bomb shelter blocks your bomb. You lose!");
                computerScore++;
            }
            else{
                console.log("The defenseless goober is quickly obliterated by your bomb. You win!");
                humanScore++;
            }
        }

        else if(humanChoice === 'bomb shelter'){
            if(computerChoice === 'goober'){
                console.log("The crafty goober infiltrates your bomb shelter, great heavens... You lose!");
                computerScore++;
            }
            else{
                console.log("The bomb leaves not a scratch on your bomb shelter. You win!");
                humanScore++;
            }
        }

        else{
            if(computerChoice === 'bomb'){
                console.log("War, war never changes. And for your goober, a bomb of war has claimed them. You lose!");
                computerScore++;
            }
            else{
                console.log("With supreme battle IQ, your goober now controls the bomb shelter and all within. You win!");
                humanScore++;
            }
        }
    }
    //end of playGame()
}
playGame();

//show stats
console.log("Final Score");
console.log("Computer: " + computerScore + "          Human: " + humanScore);
if(computerScore > humanScore){console.log("YOU LOSE");}
else{console.log("YOU WIN");}