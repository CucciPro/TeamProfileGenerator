const inquirer = require('inquirer');
const fillOutHTML = require('./src/generateMarkdown');
const writeFile = require('./src/createFile');

// array of questions for user
function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "member",
        message: "Which type of team member would you like to create?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I'm good!",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.member) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
}

function addManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name?"
    },
    {
      type: "input",
      name: "managerId",
      message: "What is your manager's id?"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email?",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return "Please enter a valid email address.";
      },
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is your manager's office number?"
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
    teamMembers.push(manager);
    start();
  });
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
