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
function generateMarkdown(data) {
  return `# ${data.Title}
  
  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${data.Installs}

  ## Usage
  ${data.Usage}

  ## License
  

  ## Contributing
  ${data.Guidelines}

  ## Tests
  ${data.Tests}

  ## Questions
  If you have any questions, visit my **[Github Page](https://www.github.com/${data.Username})** or contact me at **${data.Email}**.
  
  `;
}

module.exports = generateMarkdown;
