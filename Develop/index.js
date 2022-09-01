// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project?",
        name: "description"
    },
    {
        type: "input",
        message: "Installation instructions?",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "Contribution guidelines?",
        name: "guide"
    },
    {
        type: "input",
        message: "Test instructions?",
        name: "instruction"
    },
    {
        type: "list",
        message: "Select the license for your application?",
        name: "license",
        choices:[
        "MIT",
        "Apache",
        "GNU GPL v3",
        "BSD 3-Clause License",
        "Mozilla Public Licence 2.0",
        "No License"
        ]
    },
    {
        type: "input",
        message: "What name is the name of the license holder?",
        name: "name"
    },
    {
        type: "input",
        message: "What year was the license obtained?",
        name: "date"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    var readme = generateMarkdown(data);

        function afterWriting (error) {
            const output = (error) ? 'Error' : 'Success';
            console.log(output);
        }

        fs.writeFile(fileName, readme, afterWriting)

}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    ).then ((data) => {
        console.log(data);
        writeToFile("README.md", data);
    })
}

// Function call to initialize app
init();

