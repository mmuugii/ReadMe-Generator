// Packages required for application
const fs = require('fs');
const inquirer = require('inquirer');
const mdGenerate = require("./mdGenerate");

// Array of Questions from Command Line
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter project title.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please briefly describe your project.",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please write a description.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation guide.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select which license is used for this project:",
        choices: ['Apache', 'MIT', 'ISC', 'Mozilla'],
        validate: choices => {
            if (choices.length <= 1) {
                return true;
            } else {
                return "Please only select 1 license.";
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage for this project.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter any guidelines for contributing to this project.",
    },
    {
        type: "input",
        name: "testInstr",
        message: "Please enter any instructions for testing this project.",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub Username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
    },
];

// function to create the README Markdown file
function writeFile(fileName, data) {
    fs.writeFile("./assets/README.md", generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

// function to initialize
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        const fileName = answer.title.split(' ').join('') + '.md';
        writeFile(fileName, answer);
    });
}

init();