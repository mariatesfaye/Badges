
// Function to greet the user
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

// Function to calculate the square of a number
function calculateSquare(num) {
    return num * num;
}

// Function to display a message with the result
function displayResult(number, result) {
    console.log("The square of " + number + " is: " + result);
}

// Main function
function main() {
    // Greet the user
    greetUser("John");

    // Calculate the square of a number
    let number = 5;
    let square = calculateSquare(number);

    // Display the result
    displayResult(number, square);
}

// Call the main function to start the application
main();
