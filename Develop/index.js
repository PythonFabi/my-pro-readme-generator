// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    }, {
        type: 'input',
        message: 'What is your project Desciption (what, how and why)?',
        name: 'description'
    }, {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installation'
    }, {
        type: 'input',
        message: 'What is your usage information?',
        name: 'usage'
    }, {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'contribution'
    }, {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'tests'
    }, {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    }, {
        type: 'input',
        message: 'What is your email adress?',
        name: 'email'
    }

];

function licenseBadge(license) {
    let licenseType = license;
    let yourLicense = '';
    if(licenseType === 'MIT') {

    } else if (licens)

    return yourLicense
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return `# ${title} 

${licenseBadge(license)}

## Description

${description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to contribute](#How to contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

This is a ${license} licensed product.

## How to Contribute

${contribution}

## Tests

${tests}

## Questions

Here is my Github profile to check out my other repositories: [My Github](https://github.com/${github})

Reach me also under my email adress for additional questions: [My email](mailto:${email})`


}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
