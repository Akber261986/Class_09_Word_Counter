#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
async function welcome() {
    const title = chalkAnimation.rainbow("Welcome To Ghulam Akber's Word & Chracter Count Program");
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    title.stop(); // You can ignore line 6 to 11 its just for colorful welcome
    function wordCount(str) {
        const No_of_Word = str.trim().split(" ").length; // Removing white spaces from sentence and spliting words in an arry
        const No_of_Chracters = str.replace(/\s/g, "").length; // removing all white spaces
        return { No_of_Word, No_of_Chracters };
    }
    const userInput = await inquirer.prompt({
        name: "count",
        type: "input",
        message: ("Please Enter a sentence to count the No of words and Chracters\n")
    });
    const output = wordCount(userInput.count); // This output will be show in an object type
    console.log(chalk.cyanBright(`\nNo of "Words" in Your Sentence are: "${output.No_of_Word}"`));
    // object converted to string 
    console.log(chalk.yellow(`\nNo of "Chracters" in Your Sentence are: "${output.No_of_Chracters}"`));
}
welcome();
