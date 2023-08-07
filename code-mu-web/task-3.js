// Дано рядок. Виведіть у консоль останній символ рядка.

// const message = "I believe in you";
// const last = message.length-1;
// console.log(message[last]);

function calculeteString(message) {
    
    let last = message.length-1;
    console.log(message);
    console.log(message[last]);

    return last;
}


calculeteString("You can do everything."); // .
calculeteString("I believe in you");  // u
calculeteString("I believe in you!");  // !
calculeteString("You are a pretty and smart girl"); // l
calculeteString("What’s up"); // p
calculeteString("JavaScript is simple");  // e

