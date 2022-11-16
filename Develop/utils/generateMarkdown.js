// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache"){
    return `[![${license} badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  else if(license === "Boost Software License"){
    return `[![${license} badge](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  }
  else if (license === "GNU"){
    return `[![${license} badge](https://img.shields.io/badge/license-GPLv3-brightgreen.svg)]`;
  }
  else if (license === "MIT"){
    return `[![${license} badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Mozilla"){
    return `[!${License} badge ](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Tests](#tests)
[Contribution](#contribution)

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}

## Questions
If you have any questions you can reach out via GitHub or email
Github: https://${data.github}
Email: ${data.email}`;
}

module.exports = generateMarkdown;
