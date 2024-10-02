// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import { writeFile } from 'fs/promises';

// TODO: Create an array of questions for user input
const questions = [
    /*Need to ask for:
    -information about the app
    -project title
    -description
    -installation instructions
    -usage info
    -contribution guidelines
    -test instructions
    -choose a license for app from a list
    -github username
    -email address
    clickable links in the table of contents*/
    "Describe the application",
    "What's the title of the project?",
    "please provide a brief project description",
    "What are the installation instructions?",
    "Please detail the usage information",
    "What are the contribution guidelines?",
    "What are the testing instructions?",
    "Choose a license",
    "What is your GitHub username?",
    "What is your email address?",
];

/*class readmeData {
    constructor(info, title, desc, install, usage, contribution, test, license, username, email) {
        this.info = info;
        this.title = title;
        this. desc = desc;
        this.install = install;
        this.usage = usage;
        this.contribution = contribution;
        this.test = test;
        this.license = license;
        this.username = username;
        this.email = email;
    }
};*/

const varNames = [
    "information",
    "title",
    "description",
    "install",
    "usage",
    "contribution",
    "testing",
    "licenseName",
    "username",
    "email",
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    let i = 0;  
    inquirer
        .prompt([
            {
                type: 'input',
                name: `${varNames[0]}`,
                message: `${questions[0]}`,
            },
            {
                type: 'input',
                name: `${varNames[1]}`,
                message: `${questions[1]}`,
            },
            {
                type: 'input',
                name: `${varNames[2]}`,
                message: `${questions[2]}`,
            },
            {
                type: 'input',
                name: `${varNames[3]}`,
                message: `${questions[3]}`,
            },
            {
                type: 'input',
                name: `${varNames[4]}`,
                message: `${questions[4]}`,
            },
            {
                type: 'input',
                name: `${varNames[5]}`,
                message: `${questions[5]}`,
            },
            {
                type: 'input',
                name: `${varNames[6]}`,
                message: `${questions[6]}`,
            },
            {
                type: 'list',
                name: `${varNames[7]}`,
                message: `${questions[7]}`,
                choices: [
                    "GNU AGPLv3",
                    "GNU GPLv3",
                    "GNU LGPLv3",
                    "Mozilla Public License 2.0",
                    "Apache License 2.0",
                    "MIT License",
                    "Boost Software License 1.0",
                    "The Unlicense",
                ]
            },
            {
                type: 'input',
                name: `${varNames[8]}`,
                message: `${questions[8]}`,
            },
            {
                type: 'input',
                name: `${varNames[9]}`,
                message: `${questions[9]}`,
            },
        ])
        .then((answers) => {
            writeToFile('README.md', answers);
        });
}

// Function call to initialize app
init();
