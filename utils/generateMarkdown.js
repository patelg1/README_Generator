// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var returnString = '';  
  if (license === 'Apache License 2.0'){
    returnString = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }else if (license === 'GNU AGPLv3'){
    returnString = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  }else if (license === 'GNU GPLv3'){
    returnString = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }else if (license === 'GNU LGPLv3'){
    returnString = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }else if (license === 'Mozilla Public License 2.0'){
    returnString = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }else if (license === 'MIT License'){
    returnString = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (license === 'Boost Software License 1.0'){
    returnString = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }else if (license === 'The Unlicense'){
    returnString = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }  
  
  return returnString;
}

// Function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
  
// }

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var returnString = '';
  if (license === 'Apache License 2.0'){
    returnString = 'Licensed under the [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)'
  }else if (license === 'GNU AGPLv3'){
    returnString = 'Licensed under the [GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/)'
  }else if (license === 'GNU GPLv3'){
    returnString = 'Licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)'
  }else if (license === 'GNU LGPLv3'){
    returnString = 'Licensed under the [GNU Lesser General Public License v3.0](https://choosealicense.com/licenses/lgpl-3.0/)'
  }else if (license === 'Mozilla Public License 2.0'){
    returnString = 'Licensed under the [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)'
  }else if (license === 'MIT License'){
    returnString = 'Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)'
  }else if (license === 'Boost Software License 1.0'){
    returnString = 'Licensed under the [Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)'
  }else if (license === 'The Unlicense'){
    returnString = 'Licensed under the [The Unlicense](https://choosealicense.com/licenses/unlicense/)'
  }  

  return returnString;

}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
  
## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Tests
${data.tests}

## License
${data.license} 

${renderLicenseSection(data.license)}

## Questions
Github: https://github.com/${data.username} 

Email: ${data.email}

`;
}

module.exports = generateMarkdown;
