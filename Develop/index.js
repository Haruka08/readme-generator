// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile)

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
        message: "contribution guidelines?",
        name: "guide"
    },
    {
        type: "input",
        message: "Test instructions?",
        name: "instruction"
    },
    {
        type: "checkbox",
        message: "Select the licence for your application?",
        name: "licence",
        choices:[
        "MIT",
        "Aptache",
        "GNU",
        "BSD",
        "MPL",
        "AGPL",
        "ODbL",
        "ZPL",
        "MPL"
        ]
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

        return fs.writeFile(fileName,
        `# ${data.title} ![]
        ${data.description}
        ## Table of Contents
        - [Descriptions](#descriptions)
        - [Installation Instructions](#installation)
        - [Usage Information](#usage)
        - [Contribution Guidelines](#contribution)
        - [Test Instructions](#instruction)

        ## Installation Instructions
        ${data.instructions}
        ## Usage Information
        ${data.usage}
        ## Contribution Guidelines
        ${data.contribution}
        ## Test Instructions
        ${data.instructions}
        ## Licence
        ${data.licence}

        
        
        `, (error) => {
        const output = (error) ? 'Error' : 'Success';
        console.log(output);
    })
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

