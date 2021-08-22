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
function generateMarkdown(response) {
  let license = ""

  switch (response.license){
    case "MIT":
      license="https://img.shields.io/badge/License%3A%20-MIT-green"
    break
    case "Permissive":
      license="https://img.shields.io/badge/License%3A%20-Permissive-green"
    break
    case "LGPL":
      license="https://img.shields.io/badge/License%3A%20-LGPL-green"
    break
    case "Copyleft":
      license="https://img.shields.io/badge/License%3A%20-Copyleft-green"
    break
    case "Proprietary":
      license="https://img.shields.io/badge/License%3A%20-Proprietary-green"
    break
  }

  return `

  ![LicenseType](${license})
  # ${response.title}
  
  ## Description
  
  * ${response.description}
  
  ## Table of Contents
  
  * [Installation Instructions](#Installation-Instructions)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [License](#License)
  * [Acknowledgements](#Acknowledgements)
  * [Questions](#Questions)
  
  ## Installation Instructions
  
  * ${response.installation}
  
  ## Usage
  
  * ${response.usage}
  
  ## Contributing
  
  * ${response.contributionGuidelines}
  
  * **Special thanks to the following contributors:** 
  * ${response.contributor} / **https://github.com/${response.contributingGitHubUserName}**,
  
  ## Tests
  
  * ${response.testing}
  
  ## License
  
  * This application is licensed under the ${response.license} license type.
  
  ## Acknowledgments
  
  * ${response.acknowledgements}
  
  ## Questions
  * If you have any questions regarding the application, please reach out to **${response.fullname}** (the creator), at their GitHub profile located here: **https://github.com/${response.github}**, or via email at **${response.email}**.`;
  
  ;
}

module.exports = generateMarkdown;
