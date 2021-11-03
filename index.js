// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "generatedREADME.md";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter project title : ",
    name: "Title",
  },
  {
    type: "input",
    message: "Enter a description about project : ",
    name: "Description",
  },
  {
    type: "input",
    message: "Enter installation instructions : ",
    name: "Installs",
  },
  {
    type: "input",
    message: "Enter usage information : ",
    name: "Usage",
  },
  {
    type: "input",
    message: "Enter contribution guidelines : ",
    name: "Guidelines",
  },
  {
    type: "input",
    message: "Enter test instructions : ",
    name: "Tests",
  },
  {
    type: "list",
    message: "Choose a license for application : ",
    choices: [],
    name: "License",
  },
  {
    type: "input",
    message: "Enter GitHub username : ",
    name: "Username",
  },
  {
    type: "input",
    message: "Enter email address : ",
    name: "Email",
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
