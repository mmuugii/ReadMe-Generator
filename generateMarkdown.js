// this JS file works in tandem with index. js
// function to bring up logo for licenses
function licenseBadgeLogo(license) {
    if (license.length === 0) {
        return ""
    } else if (license == 'Apache') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license == 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license == 'ISC') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    } else if (license == 'Mozilla') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
}

// function to link licenses
function licenseLink(license) {
    if (license.length === 0) {
        return ""
    } else if (license == 'Apache') {
        return `https://opensource.org/licenses/Apache-2.0`
    } else if (license == 'MIT') {
        return `https://opensource.org/licenses/MIT`
    } else if (license == 'ISC') {
        return `https://opensource.org/licenses/ISC`
    } else if (license == 'Mozilla') {
        return `https://opensource.org/licenses/MPL-2.0`
    }
}

// function that will return license section of README
function licenseSection(license) {
    if (license.length === 0) {
        return ""
    } else {
        return `## License
${licenseBadgeLogo(license)}`
    }
}

// function to actually generate markdown
// 

function generateMarkdown(data) {
    return `# ${data.title}

${licenseBadgeLogo(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}
${licenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.testInstr}

## Questions

My GitHub: [${data.username}](https://github.com/${data.username}) <br>
Email me: ${data.email}
`
}

module.exports = generateMarkdown;