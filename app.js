const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const emplyeePrompts = [
  {
    type: "input",
    name: "name",
    message: "Please enter your full name",
    default: "Bruce Wayne"
  },

  {
    type: "input",
    name: "id",
    message: "Please enter your Wayne Enterprises emplyee ID",
    default: "22286266"
  },

  {
    type: "input",
    name: "email",
    message: "Please enter your work email address",
    default: "bruce@wayneenterprises.org"
  },
];

const employeePositionSelector = {
  type: "list",
  name: "position",
  message: "Please select your current position at Wayne Enterprises",
  choices: ["Intern", "Engineer", "Manager"],
};

const managerPrompts = {
  type: "input",
  name: "officeNumber",
  message: "Enter your direct office extension number",
  default: "466684426"
}

const engineerPrompts = {
  type: "input",
  name: "github",
  message: "Enter your GitHub profile details",
  default: "/lucius.fox"
}

const internPrompts = {
  type: "input",
  name: "school",
  message: "Enter your school",
  default: "Gotham City University"
}

const employees = [];

function mainMenu() {
  inquirer .prompt([emplyeePrompts, managerPrompts])
  .then(function(answer) {

    const manager = new Manager(answer.name, answer.id , answer.email, answer.officeNumber);
    employees.push(manager);

    createEmplyee();
  });
  
mainMenu();

function createEmplyee() {
  inquirer
    .prompt(employeePositionSelector, managerPrompts)
    .then(function(answer) {
      switch(answer.role) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:     
      }
    })
}

function createEngineer() {
  inquirer
    .prompt([emplyeePrompts, engineerPrompts])
    .then(function(answer) {
      const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        emplyeePrompts.push(engineer);

        createEngineer();
    })
} 

function createIntern() {
  inquirer
    .prompt([emplyeePrompts, internPrompts])
    .then(function(answer) {
      const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        emplyeePrompts.push(intern);

        createIntern();
    })
} 

render(answer) {
  return 
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
}
