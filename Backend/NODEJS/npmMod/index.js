const chalk = require("chalk");

const validator = require("validator");

// console.log(chalk.green.underline.inverse("hello world")); // Remove the dot (.) after chalk.blue



const res = validator.isEmail("Shri@gmail.com");

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));