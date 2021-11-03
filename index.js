// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter project title : ",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description about project : ",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation instructions : ",
    name: "installs",
  },
  {
    type: "input",
    message: "Enter usage information : ",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contribution guidelines : ",
    name: "guidelines",
  },
  {
    type: "input",
    message: "Enter test instructions : ",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for application : ",
    choices: [],
    name: "license",
  },
  {
    type: "input",
    message: "Enter GitHub username : ",
    name: "username",
  },
  {
    type: "input",
    message: "Enter email address : ",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("README file has been created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => writeToFile(fileName, data));
}

// Function call to initialize app
init();
