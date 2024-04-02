

var choices = [
    "rock",
    "paper",
    "scissor"
]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

var computerSelection = getComputerChoice()
var playerSelection = prompt("rock, paper, scissor ?")

function game(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        alert("Tie")
    } else if (playerSelection = "rock" ) {
        if (computerSelection = "scissor") {
            alert("You win!" + playerSelection + " beats " + computerSelection)
        } else if (computerSelection = "paper") {
            alert("You lose!" + computerSelection + " beats " + playerSelection)
        }
    } else if (playerSelection = "scissor") {
        if (computerSelection = "paper") {
            alert("You win!" + playerSelection + " beats " + computerSelection)
        } else if (playerSelection = "rock") {
            alert("You lose!" + computerSelection + " beats " + playerSelection)
        }
    } else if (playerSelection = "paper") {
        if (computerSelection = "scissor") {
            alert("You lose!" + computerSelection + " beats " + playerSelection)
        } else if (playerSelection = "rock") {
            alert("You win!" + playerSelection + " beats " + computerSelection)
        }
    } 

}

alert("You select " + playerSelection + "\n" + "Computer select " + computerSelection)
alert(game(playerSelection, computerSelection))