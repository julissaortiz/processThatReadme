// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license do you want for your project?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install the dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "How do you run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "How would the user use the repository?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How would a user contribute to a repository?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("creating readMe...");
    writeToFile("README.md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
