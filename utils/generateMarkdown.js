// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseImage = "";
let licenseLink = "";

function renderLicenseBadge(license) {
  if (license === "MIT") {
    licenseImage = `<img src = "https:/img./shields.io/badge/license-MIT-green">`;
  } else if (license === "Apache") {
    licenseImage = `<img src = "https://img.shields.io/badge/license-Apache-blue">`;
  } else if (license === "MIT/Apache-2.0") {
    licenseImage = `<img src = "https://img.shields.io/badge/license-MIT%2FApache--2.0-blue">`;
  } else if (license === "BSD") {
    licenseImage = `<img src = "https://img.shields.io/badge/license-BSD-green">`;
  }
  return licenseImage;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === "MIT") {
    licenseLink = "https://www.mit.edu/~amini/LICENSE.md";
  } else if (license === "Apache") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "MIT/Apache-2.0") {
    licesneLink = "https://shields.io/badge/license-MIT%2FApache--2.0-blue";
  } else if (license === "BSD") {
    licenseLink = "https://shields.io/badge/license-BSD-green";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //   renderLicenseBadge(data.license);
  //   renderLicenseLink(data.license);
  renderLicenseSection(data.license);

  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${data.installs}

  ## Usage
  ${data.usage}

  ## License

  ${licenseImage}

  ${licenseLink}
  

  ## Contributing
  ${data.guidelines}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, visit my **[Github Page](https://www.github.com/${data.username})** or contact me at **${data.email}**.
  
  `;
}

module.exports = generateMarkdown;
