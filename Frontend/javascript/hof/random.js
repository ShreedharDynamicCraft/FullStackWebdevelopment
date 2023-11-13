// // 2. Random Number Generator w2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.

function generateRandomNumberWithDelay() {
    const delay = 3000;
    let countdown = delay / 1000;

    console.log(`Generating a random number in ${countdown} seconds...`);

    const countdownInterval = setInterval(function() {
        countdown--;
        console.log(`Time remaining: ${countdown} seconds...`);

        if (countdown === 0) {
            clearInterval(countdownInterval);

            setTimeout(function() {
                const randomN = Math.floor(Math.random() * 100);
                console.log(`Random number generated: ${randomN}`);
            }, 0); // Using a very short delay of 0 milliseconds
        }
    }, 1000);
}

generateRandomNumberWithDelay();





