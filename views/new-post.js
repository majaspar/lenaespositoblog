const playerHeading = document.getElementById('player');
const computerHeading = document.getElementById('computer');
const resultHeading = document.getElementById('result')
const options = document.querySelectorAll('.option')

let playerChoice;
let computerChoice;
let gameResult;

options.forEach(option => option.addEventListener('click', () => {
        playerChoice = option.innerHTML;
        computer();
        playerHeading.innerHTML = `You picked <br> <span class="choice">${playerChoice}</span>`;
        computerHeading.innerHTML = `Computer picked <br> <span class="choice">${computerChoice}</span>`;
        resultHeading.innerHTML = checkWinner();
    }))

    function computer() {
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        switch (randomNumber) {
            case 1:
                computerChoice = "🪨";
                break;
            case 2:
                computerChoice = "📃";
                break;
            case 3:
                computerChoice = "✂";
                break;
        }
    }


function checkWinner() {
    if (playerChoice == computerChoice) {
        return "No winners this time. It's a tie!";
    } 
    else if (computerChoice == "🪨") {
        return (playerChoice == "📃") ? "Congratulations! You win!" : "Sorry! You lose!";
    } 
    else if (computerChoice == "📃") {
        return (playerChoice == "✂") ? "Congratulations! You win!" : "Sorry! You lose!"
    } 
    else if (computerChoice == "✂") {
        return (playerChoice == "🪨") ? "Congratulations! You win!" : "Sorry! You lose!"
    } 
}
