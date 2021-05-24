const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")

let Staff = [];

// manager questions
const questions = {

    Manager = [
    {
        type: "input",
        message: "Please Enter Team Manager's name: ",
        name: "name",
    },
    {
        type: "input",
        message: "Please Enter Team Manager's Email: ",
        name: "email",
    },
    {
        type: "input",
        message: "Please Enter Team Manager's ID: ",
        name: "id",
    },
    {
        type: "input",
        message: "Please Enter Team Manager's Office Number: ",
        name: "officeNumber",
    },
    ],


    Engineer = [
    {
        type: "input",
        message: "Please Enter Engineer's name: ",
        name: "name",
    },
    {
        type: "input",
        message: "Please Enter Engineer's Email: ",
        name: "email",
    },
    {
        type: "input",
        message: "Please Enter Engineer's ID: ",
        name: "id",
    },
    {
        type: "input",
        message: "Please Enter Engineer's Github username: ",
        name: "github",
    },
    ],

     Intern = [
    {
        type: "input",
        message: "Please Enter Intern's name: ",
        name: "name",
    },
    {
        type: "input",
        message: "Please Enter Intern's Email: ",
        name: "email",
    },
    {
        type: "input",
        message: "Please Enter Intern's ID: ",
        name: "id",
    },
    {
        type: "input",
        message: "Please Enter Intern's University/College Name: ",
        name: "school",
    },
    ]
};

// to build the body of the html file
function buildPage() {
  function generateCard(employee) {
    switch (employee.getRole()) {
      case "Manager":
        return `
        <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">${employee.name}</h5>
                  <hr />
                  <p class="card-text">Role: ${employee.getRole()}</p>
                  <hr />
                  <p class="card-text">Email: <a href="mailto:${
                    employee.email
                  }">${employee.email}</a></p>
                  <hr />
                  <p class="card-text">Office Number: ${
                    employee.officeNumber
                  }</p>
                  <hr />
                  <p class="card-text">
                    <small class="text-muted">ID: ${employee.id}</small>
                  </p>
                </div>
              </div>`;
      case "Engineer":
        return `
        <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">${employee.name}</h5>
                  <hr />
                  <p class="card-text">Role: ${employee.getRole()}</p>
                  <hr />
                  <p class="card-text">Email: <a href=mailto:${
                    employee.email
                  }>${employee.email}</a></p>
                  <hr />
                  <p class="card-text">Github: <a href="http://www.github.com/${
                    employee.github
                  }">${employee.getGithub()}</a></p>
                  <hr />
                  <p class="card-text">
                    <small class="text-muted">ID: ${employee.id}</small>
                  </p>
                </div>
              </div>`;
      case "Intern":
        return `
        <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">${employee.name}</h5>
                  <hr />
                  <p class="card-text">Role: ${employee.getRole()}</p>
                  <hr />
                  <p class="card-text">Email: <a href=mailto:${
                    employee.email
                  }>${employee.email}</a></p>
                  <hr />
                  <p class="card-text">School: ${employee.getSchool()}</a></p>
                  <hr />
                  <p class="card-text">
                    <small class="text-muted">ID: ${employee.id}</small>
                  </p>
                </div>
              </div>`;
    }
  }
  function buildColumns() {
    let htmlContent = "";
    for (employee of Employees) {
      htmlContent += generateCard(employee);
    }
    return htmlContent;
  }
  let page = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team Profile</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <style>
        .bg-black {
          background-color: black;
        }
        /* On screens that are 992px or less */
        @media screen and (max-width: 992px) {
          .card-columns {
            column-count: 3;
          }
        }
  
        /* On screens that are 780px or less*/
        @media screen and (max-width: 780px) {
          .card-columns {
            column-count: 2;
          }
        }
        @media screen and (max-width: 480px) {
          .card-columns {
            column-count: 1;
          }
        }
      </style>
    </head>
    <body class="bg-black">
      <div class="jumbotron container">
        <h1 class="display-4">Welcome to My Team Profile</h1>
        <!-- Welcome Message -->
        <p class="lead text-dark">
          This page contains the contact details of our team members.
        </p>
        <hr class="my-4" />
      </div>
      <div class="card-columns container">
        ${buildColumns()}
      </div>
  
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    </body>
  </html>
  `;

  return page;
}

//to get the next choice from the user
function makeChoice() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add an employee to your team?",
        name: "next",
        choices: ["Engineer", "Intern", "Finish Building Team"],
      },
    ])
    .then((response) => {
      switch (response.next) {
        case "Engineer":
          inquirer
            .prompt(engineerData)
            .then((response) => {
              let engineer = new Engineer(
                response.name,
                response.id,
                response.email,
                response.github
              );
              Employees.push(engineer);
              makeChoice();
            })
            .catch((err) => {
              console.log("Something went wrong\n");
              console.error(err);
            });
          break;
        case "Intern":
          inquirer
            .prompt(internData)
            .then((response) => {
              let intern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school
              );
              Employees.push(intern);
              makeChoice();
            })
            .catch((err) => {
              console.log("Something went wrong\n");
              console.error(err);
            });
          break;
        case "Finish Building Team":
          fs.writeFile(
            //writing the README.md file
            `./Team_Profile.html`,
            buildPage(),
            (err) => {
              if (err) console.error(err);
            }
          );
          console.log("Team Profile Page Generated Successfully"); //success prompt
      }
    })
    .catch((err) => {
      console.log("Something went wrong\n");
      console.error(err);
    });
}

// Main command line that starts the application
inquirer
  .prompt(teamManagerData)
  .then((response) => {
    let manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    Employees.push(manager);
    makeChoice();
  })
  .catch((err) => {
    console.log("Something went wrong\n");
    console.error(err);
  });