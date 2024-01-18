/* lets get all of the variables ready first */
let body = document.body
let possibleChoices = ["rock", "paper", "scissors"]
let rock_select = document.getElementById("rock")
let paper_select = document.getElementById("paper")
let scissors_select = document.getElementById("scissors")
var rounds = 0;
var playerScore = 0;
var computerScore = 0;
finalChoice = "blank"
let isgameGoing = true
let booming = document.getElementById("BOOM")
booming.addEventListener('click', function() {
    playerScore = 3;
    alert("YOU WIN!!!!!! BY: THE BOOM METHOD")
})

/* This is where I've placed the attributes for the rock, paper and scissors selections in order to aid in the comparing process. */
rock_select.name = "rock"
paper_select.name = "paper"
scissors_select.name = "scissors"
rock_select.beats = "scissors"
paper_select.beats = "rock"
scissors_select.beats = "paper"
rock_select.hurts = "paper"
paper_select.hurts = "scissors"
scissors_select.hurts = "rock"


/* where the values are calculated 

for (i = 0; i < possibleChoices.length; i++) {
    if (possibleChoices[i] == scissors.beats) {
        console.log("WOOHOO!")
    } else {
        console.log("bruh")
    }
}
*/

/* var name = prompt("What's Your Name?") 
let playerName = document.getElementById("playernamed")
document.playerName.write("bob")
console.log(playerName)
document.getElementById("playernamed").write("bob") */


function PlayerSelect() {
    if (isgameGoing !== false) {
        rock_select.addEventListener('click', function() {
            if (isgameGoing) {
            alert("you chose rock")
            playerChoice = rock_select
            computerChoose()
            console.log("JUST SO YOU KNOW: THE COMPUTER HAS CHOSEN " + finalChoice)
            compareChoices()
            whohasWon()
            console.log("PLAYERSCORE: " + playerScore)
            console.log(isgameGoing)
            }
     })
    }
    paper_select.addEventListener('click', function() {
        if (isgameGoing) {
        alert("you chose paper")
        playerChoice = paper_select
        hasPlayerChosen = true
        computerChoose()
        compareChoices()
        whohasWon()
        console.log("PLAYERSCORE: " + playerScore)
        console.log(isgameGoing)
        }
    })
    scissors_select.addEventListener('click', function() {
        if (isgameGoing) {
        alert("you chose scissors")
        playerChoice = scissors_select
        computerChoose()
        compareChoices()
        whohasWon()
        console.log("PLAYERSCORE: " + playerScore)
        console.log(isgameGoing)
        }
    })
     } 

PlayerSelect()


/* button checkpoint -- the button checks if there is an input and stores it--then the rest of the functions continue */


function computerChoose() {
    let computerChoice = Math.random() * possibleChoices.length 
    let choice = Math.floor(computerChoice)
    finalChoice = possibleChoices[choice]
    console.log("COMPUTER CHOOSES " + possibleChoices[choice] + "!")
    }

function compareChoices() {
    if (playerScore == 3 || computerScore == 3) {
        console.log("HELLO WORLD")
    }
    if (finalChoice == playerChoice.beats) {
        playerScore = playerScore + 1
        rounds = rounds + 1
        console.log("PLAYER HAS GAINED A POINT")
        console.log("PLAYER SCORE: " + playerScore)
    } else if (finalChoice == playerChoice.hurts) {
        computerScore = computerScore + 1
        rounds = rounds + 1
        console.log("COMPUTER SCORE: " + computerScore)
    } else if (finalChoice == playerChoice.name) {
        console.log("try again")
    }
}


whohasWon = function() {
    if (playerScore == 3) {
        console.log("PLAYER WINS")
        isgameGoing = false;
        const h2 = document.createElement("h2").style.backgroundColor = "blue";
        h2.innerText = "YOU WIN"
        body.append(h2)    
    } if (computerScore == 3) {
        console.log("COMPUTER WINS")
        isgameGoing = false;
        const h2 = document.createElement("h2")
        h2.innerText = "GAME OVER"
        body.append(h2)    
    } 
    }


