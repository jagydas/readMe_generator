// function generateMarkdown(data) {
//     return `# Title   
// ${data.title}
// # Description
// ${data.description}
// # Badges
// ${data.badge}  
// ## License
// ${data.license}
// `;
// }
function generateMarkdown(data) {
    return `
# Table of Contents
* [Project Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributions](#contributions)
* [Questions](#questions)
# Project Description
${data.description}

# Installation
${data.installation}
# Usage
${data.usage}
# Tests
${data.tests}
# License
${data.license}
# Contributions
${data.contributors}
`;
}

module.exports = generateMarkdown;