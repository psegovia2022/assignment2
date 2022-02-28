

let start = prompt("Are you ready to play the game? Yes/No");
if (start == "Yes") {
    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera.\n You are disoriented, lost, hungry and extremely thirsty. \nYou see a speck of light in the distance ahead of you, something shimmering to your right, \nand the sound of running water to your left. Your back is against the wall.");
    let direction = prompt("Which direction would you like to head (please enter forward, left, or right).");
    switch (direction) {
        case "left":
            alert("Your thirst has gotten the better of you. \nYou trip on a rock, hit your head, \nand fall into a pool of water and drown!");
            break;
        case "forward":
            alert("You walk 100 yards and safely make your way out of the cave.");
            break;
        case "right":
            alert("You found the gold! You walk into a small room and see thousands of gold coins, \njewels, chalices, and more. You jump into the pile of gold in celebration \n and immediately a hidden door slams down and traps you in the room forever!");
            break;
        default:
            alert("The ghost of Captain Chingadera has condemned you to eternal damnation \n and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
    };
    let rate = prompt("The game is now over. Please, rate the game between 1 and 10. ");
    if (rate >= 6 && rate <= 10) {
        alert("Thank you for playing. Hope to see you back again!");
    }else if (rate <= 5 && rate >= 1) {
        alert("Thank you for playing. We are working hard to improve the game");
    } else {
        alert("Thank you for playing");
    }
} else {
   alert("All good. You\'re welcome to play again later.");
};