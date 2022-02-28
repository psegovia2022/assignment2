// Usage: Use else if statements
// 1.	Collect the a number between 1 and 100 from the user. 
// 2.	Make sure that number is between 1 and 100, 
// if it is not, let the user know that only numbers between 1 and 100 are accepted.
// 3.	If the score is between 60 and 69, write out “You received a D” into the console.
// If the score is between 70 and 79, write out “You received a C” into the console.
// If the score is between 80 and 89, write out “You received a B” into the console.
// If the score is between 90 and 100, write out “You received an A” into the console.
// If the score is less than 60, write out “You received an F” into the console.

let number = parseInt(prompt("Choose a number between 1 and 100."));
if (number >= 60 && number <= 69) {
    console.log("You received a D");
} else if (number >= 70 && number <= 79) {
    console.log("You received a C");
} else if (number >= 80 && number <= 89) {
    console.log("You received a B");
} else if (number >=90 && number <= 100) {
    console.log("You received an A.");
} else if (number < 60 && number >= 1) {
    console.log("You received an F.");
} else {
 console.log("Only numbers between 1 and 100 are accepted. Please, choose a new number.");
};