const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const render = require("./src/generateMarkdown");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const members = [];

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
          createFile();
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
    members.push(manager);
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
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.github
    );
    members.push(engineer);
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
      name: "internId",
      message: "What is your intern's id?"
    },
    {
      type: "input",
      name: "internEmail",
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
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.school
    );
    members.push(intern);
    start();
  });
}

function createFile() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(members), "utf-8");
};

start();