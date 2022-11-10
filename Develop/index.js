// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generatePage = require('./utils/generateMarkdown.js');
// // TODO: Create an array of questions for user input
const questions = () => {
    inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please include any installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide any usage information.',
        name: 'usage',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Chose the appropriate license for this project: ',
        choices: [
            'Apache',
            'Boost Software License',
            'GNU',
            'ISC',
            'MIT',
            'Mozilla',
            'Open'
        ]
    },
    {
        type: 'input',
        message: 'Did you run any tests in this project?',
        name: 'test'
    },
    { 
        type: 'input',
        message: "Please provide any contribution information",
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },

])
}
   

// // TODO: Create a function to write README file
// const writeFile = data => {
//     fs.writeFile('README.md', data, (err) =>
//     err ? console.log(err) : console.log('README.md Created!')
//     )};
    

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
