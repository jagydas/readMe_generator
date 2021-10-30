const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');


// licenses
const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
const gnu = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const mit = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const isc = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";


const questions = [{
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links "
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "list",
        name: "license",
        message: "What type of license would you like?",
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT",
            "ISC",
            "None"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
];



inquirer
    .prompt(questions)
    .then(function(data) {
        console.log(data);

        // check for which license the user picked
        if (data.license === "Apache License 2.0") {
            data.license = apache;
        } else if (data.license === "GNU GPLv3") {
            data.license = gnu;
        } else if (data.license === "MIT") {
            data.license = mit;
        } else if (data.license === "ISC") {
            data.license = isc;
        } else {
            data.license = "This project is currently not licensed."
        }
        // TODO: Create a function to write README file
        fs.writeFileSync("README.md", generate(data));


    });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();