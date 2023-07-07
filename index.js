// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: make/format markdown

const questions = {
  title: {
    type: 'input',
    message: 'What is your project title?',
    value: null,
    required: true,
  },
  description: {
    type: 'input',
    message: 'Write a short project description?',
    value: null,
    required: true,
  },
  license: {
    type: 'list',
    message: 'Choose a license for your project?',
    choices: [
      'MIT',
      'APACHE 2.0',
      'GPL 3.0',
      'BSD 3',
      'NONE OF THESE',
    ],
    value: null,
    required: true,
  },
  installation: {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
    value: null,
    required: false,
  },
  test: {
    type: 'input',
    message: 'What command should be run to run tests?',
    default: 'npm test',
    value: null,
    required: false,
  },
  usage: {
    type: 'input',
    message:
      'What does the reader need to know about using this repo?',
    value: null,
    required: false,
  },
  contributing: {
    type: 'input',
    message: 'Who were the project contributors?',
    value: null,
    required: true,
  },
  githubUsername: {
    type: 'input',
    message: 'What is your GitHub username?',
    value: null,
    required: true,
  },
  email: {
    type: 'input',
    message: 'What is your email?',
    value: null,
    required: true,
  },
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: write a function that takes the answers (inputs) and converts them to README format

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
