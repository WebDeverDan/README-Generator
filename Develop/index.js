// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
     {
        type: 'input',
        message: 'What the application title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please provide a short description of the application.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please provide installation instructions for the application.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please provide usage information for the application.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please provide any testing information for this application.',
        name: 'testing',
      },
      {
        type: 'input',
        message: 'Please provide any contribution guidelines for this application.',
        name: 'contributionGuidelines',
      },
      {
        type: 'input',
        message: 'Please provide who contributed to this application.',
        name: 'contributor',
      },
      {
        type: 'input',
        message: 'Please provide their GitHub url.',
        name: 'githubContributor',
      },

      {
        type: 'input',
        message: 'Please provide the GitHub username(s) for the contributors.',
        name: 'contributingGitHub',
      },
      {
        type: 'list',
        message: 'What type of license does this application have?',
        name: 'license',
        choices: ['Public Domain','Permissive', 'LGPL', 'Copyleft', 'Proprietary'],
      },
      {
        type: 'input',
        message: 'Please list any acknowledgements that this application has.',
        name: 'acknowledgements',
      },
      {
        type: 'input',
        message: 'What is your full name?',
        name: 'fullname',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },



])

.then((response) => {
    console.log(response)
    const readmeFile = `
    

    # ${response.title}

## Description

* ${response.description}

### Table of Contents

* Installation Instructions
* Usage Information
* Contributors
* Test Instructions

## Installation Instructions

* ${response.installation}

## Usage Information

* ${response.usage}

## Contribution Guidelines and Contributors

* ${response.contributionGuidelines}

* Special thanks to the following contributors: 
* ${response.contributor} / https://github.com/${response.githubContributor},

## Testing Information

* ${response.testing}

## License

* This application is licensed under the ${response.license} license type.

## Acknowledgments

*${response.acknowledgements}

## Questions
* If you have any questions regarding the application, please reach out to ${response.fullname} (the creator), at their GitHub profile located here: https://github.com/${response.github}, or via email at ${response.email}.`


// TODO: Create a function to write README file
fs.writeFile('README.md', readmeFile, function  (err) {
    if (err) console.log(error);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

});

