// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./README_Generator/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project, if applicable? ',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What test are written for project, if any? Provide examples.',
        name: 'tests',
    },
    {
        type: 'checkbox',
        message: 'Choose a license for your project.',
        choices:['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your github user name?',        
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! Your README.md file is created.')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const newReadMe = generateMarkdown(responses);
        writeToFile("README.md", newReadMe);
    })
}

// Function call to initialize app
init();
