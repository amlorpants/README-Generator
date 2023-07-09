// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = {
  title: {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  description: {
    type: 'input',
    message: 'Write a short project description?',
    name: 'description',
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
    name: 'license',
  },
  installation: {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
    name: 'installation',
  },
  test: {
    type: 'input',
    message: 'What command should be run to run tests?',
    default: 'npm test',
    name: 'test',
  },
  usage: {
    type: 'input',
    message:
      'What does the reader need to know about using this repo?',
    name: 'usage',
  },
  contributing: {
    type: 'input',
    message: 'Who were the project contributors?',
    name: 'contributing',
  },
  githubUsername: {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'githubUsername',
  },
  email: {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to prompt the user with the questions
function promptUser() {
  return inquirer.prompt(Object.values(questions));
}

// TODO: Create a function to write README file
function writeToFile(fileName, markdown) {
  return fs.writeFileSync(
    path.join(process.cwd(), fileName),
    markdown
  );
}

function init() {
  promptUser().then((answers) => {
    writeToFile('uniqueREADME.md', generateMarkdown(answers));
    console.log('README.md file generated successfully!');
  });
}

// Function call to initialize app
init();
