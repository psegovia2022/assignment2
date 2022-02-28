let num1 = prompt("Choose a number between 1 and 10");
let num2 = prompt("Choose a number between 1 and 10");
if (num1 > num2) {
    document.write("You chose " + num1+ " and it is the largest.");
};

if (num2 > num1) {
    document.write("Your chose " + num2 + " and it is the largest.");
};

if (num1 == num2) {
    document.write("You lost.");
};