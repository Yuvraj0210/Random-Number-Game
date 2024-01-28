// NUMBER GUESSING GAME

const minimum = 1;
const maximum = 100;

// generate random number
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(answer);

// number of attempts
let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess the number between ${minimum} - ${maximum}`);
    
    // should be a number 
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < minimum || guess > maximum) {
        window.alert("Please enter a valid number that lies in the range");
    } else {
        attempts++;

        if (guess < answer) {
            window.alert("The number you entered is lower than the randomly generated number");
        } else if (guess > answer) {
            window.alert("The number you entered is higher than the randomly generated number");
        } else {
            window.alert(`You have guessed the correct number. Congratulations! Answer = ${answer}. It took you ${attempts} attempts!`);
            running = false;
        }
    }
}
