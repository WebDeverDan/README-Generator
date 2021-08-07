// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./data/questions");
// TODO: Create an array of questions for user input

inquirer.prompt(questions).then((response) => {
  console.log(response);
  // template literal for readme file and responses from inquirer
  const readmeFile = generateMarkdown(response);

  // TODO: Create a function to write README file
  // writeFileSync makes this a synchronous function
  fs.writeFileSync("README.md", readmeFile);

  // TODO: Create a function to initialize app
  function init() {}

  // Function call to initialize app
  init();
});
