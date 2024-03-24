#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Try to Guess a Number between 1 to 10: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congrats! You've guessed a right number.");
}
else {
    console.log("You've guessed a wrong number.");
}
;
