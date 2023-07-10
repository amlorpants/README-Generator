function generateLicense(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if (license === 'no license') {
    return 'no license';
  }
}

function generateMarkdown(answers) {
  return `# ${answers.title}

## Description 
${answers.description}

## Table of Contents
[description](#description)
[installation](#installation)
[usage](#usage)
[license](#license)
[contributors](#contributors)
[tests](#tests)
[questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${generateLicense(answers)}

## Contributors
${answers.contributing}

## Tests   
${answers.test} 

## Questions
github: ${answers.githubUsername} 
email: ${answers.email} 
`;
}

module.exports = generateMarkdown;
