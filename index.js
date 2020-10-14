const inquirer = require('inquirer');
const fillOutHTML = require('./src/generateMarkdown');
const writeFile = require('./src/createFile');

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Please enter name:'
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is the user ID?'
        },
        {
          type: 'confirm',
          name: 'confirmAbout',
          message: 'What is the user email?',
          default: true
        }
      ])
  }


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init(questions) {
    return inquirer.prompt(questions);
}

init(questions)
.then(answers => {
    return fillOutHTML(answers);
})
.then(HTMLdata => {
    return writeFile(HTMLdata)
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
  console.log(err);
});
