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
        type: 'list',
        message: 'What LICENSE would you like to choose?',
        name: 'license',
        choices: []
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
    let yourLicense = '';
    if(license === 'The MIT License') {
    yourLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'Apache 2.0 License') {
    yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'Boost Software License 1.0') {
    yourLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license === 'BSD 3-Clause License') {
        yourLicense = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    } else if (license === 'BSD 2-Clause License') {
        yourLicense = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    } else if (license === 'CC0') {
        yourLicense = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
    } else if (license === 'Attribution 4.0 International') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license === 'Attribution-ShareAlike 4.0 International') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license === 'Attribution-NonCommercial 4.0 International') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license === 'Attribution-NoDerivates 4.0 International') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license === 'Attribution-NonCommmercial-ShareAlike 4.0 International') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license === 'Attribution-NonCommercial-NoDerivatives 4.0 International') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license === 'Eclipse Public License 1.0') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    }  else if (license === 'GNU GPL v3') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'GNU GPL v2') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license === 'GNU AGPL v3') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'GNU LGPL v3') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'GNU FDL v1.3') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'The Hippocratic License 2.1') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'The Hippocratic License 3.0') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'IBM Public License Version 1.0') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'ISC License (ISC)') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'Mozilla Public License 2.0') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'Attribution License (BY)') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'Open Database License (ODbL)') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'Public Domain Dedication and License (PDDL)') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'The Perl License') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'SIL Open Font License 1.1') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'The Unlicense') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'The Do What the Fuck You Want to Public License') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'The zlib/libpng License') {
        yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    return yourLicense
}

// TODO: Create a function to write README file
function writeToFile(fileName, {title, license, description, installation, usage, contribution, tests, github, email}) {
const content = `# ${title} 
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

fs.writeFileSync(fileName, content);


}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            writeToFile('README.md', response);
        })
        .catch(error => {
            console.log(error);
        });
}

// Function call to initialize app
init();
