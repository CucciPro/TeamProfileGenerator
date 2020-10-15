const inquirer = require('inquirer');
const fillOutHTML = require('./src/generateMarkdown');
const writeFile = require('./src/createFile');
const teamMembers = [];

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
        case "I'm good!":
          writeToFile();
          break;
        default:
          start();
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
      name: "officeNumber",
      message: "What is your manager's office number?"
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.officeNumber
    );
    teamMembers.push(manager);
    start();
  });
}

function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is your engineer's name?"
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is your engineer's id?"
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is your engineer's email?",
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
      name: "github",
      message: "What is your engineer's GitHub username?"
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.github
    );
    teamMembers.push(engineer);
    start();
  });
}

function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?"
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is your intern's id?"
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is your interns's email?",
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
      name: "school",
      message: "What is your intern's school name?"
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.school
    );
    teamMembers.push(intern);
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
