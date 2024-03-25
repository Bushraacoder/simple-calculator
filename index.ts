
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstnumber" },
    { message: "Enter your second number", type: "number", name: "secondnumber" },
    { message: "Select one of operators to perform actions",
     type: "list", 
     name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"]}
]);

// Conditional statement
if (answer.operator === "ADDITION") {
    console.log("Result:", answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "SUBTRACTION") {
    console.log("Result:", answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "MULTIPLICATION") {
    console.log("Result:", answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "DIVISION") {
    console.log("Result:", answer.firstnumber / answer.secondnumber);
} else {
    console.log("Please select correct operator");
}

    