// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title.value}

  ## Description 
  ${questions.description.value}

  ## Installation
  ${
    questions.installation.value === null
      ? questions.installation.default
      : questions.installation.value
  }
`;
}

// How do string literals work?
const parent = 'Mom';
const otherParent = 'Dad';
console.log(`hello ${parent} and ${otherParent}`);

module.exports = generateMarkdown;
