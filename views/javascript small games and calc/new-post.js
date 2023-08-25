const answer = Math.floor(Math.random() * 100 + 1);
let guesses = 0;

submitBtn = document.getElementById('submitBtn');
guessAnswer = document.getElementById('guess-answer')

submitBtn.onclick = function () {
    let guess = document.getElementById('guessField').value;
    guesses += 1;

    if (guess == answer) {
        guessAnswer.innerHTML = `Congratulations! You got it! The answer was <span> ${answer}</span>. It took you <span>${guesses}</span> guesses. <br><br> Refresh the page to play again :)`
    } else if (guess < answer) {
        guessAnswer.innerHTML = "Too small! Try again."
    } else if (guess > answer) {
        guessAnswer.innerHTML = "Too big! Try again."
    } else {
        guessAnswer.innerHTML = "That's not a number."
    }
}


document.getElementById('submitTemp').onclick = function () {

    let temp;

    //check if any of the radio buttons is selected
    if (document.getElementById('cTemp').checked) {
        inputValue = document.getElementById('textBox').value
        temp = document.getElementById('textBox').value
        temp = Number(temp)
        temp = toCelsius(temp)
        document.getElementById('temp-answer').innerHTML = `${inputValue}°F is equal to ${temp}°C`


    } else if (document.getElementById('fTemp').checked) {
        inputValue = document.getElementById('textBox').value
        temp = document.getElementById('textBox').value
        temp = Number(temp)
        temp = toFahrenheit(temp)
        document.getElementById('temp-answer').innerHTML = `${inputValue}°C is equal to ${temp}°F`
    } else {
        document.getElementById('temp-answer').innerHTML = "Select a unit"
    }


}


function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}