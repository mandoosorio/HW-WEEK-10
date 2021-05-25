//in order to run all tests, just enter npm test in command line and the tests should run

const inquirer = require("inquirer");
const fs = require("fs");

//Models that we will use to create our employee objects
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const path = require("path");
//the "where" 
const OUTPUT_DIR = path.resolve (__dirname, "output");
//the "what" -- an index.html file in OUTPUT_DIR which is the Output folder
const outputPath = path.join (OUTPUT_DIR, "index.html");

//when we use the render const at the end of this file, this will run the code in our template.js file
const render = require ("./src/template.js");

//array that will hold all the employees created from the command line prompt
let Staff = [];

// manager questions
const questions = {

    Manager: [
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
    {
        type: "list",
        message: "would you like to add another employee?",
        name: "addNew", 
        choices: ["yes", "no"]
    }
    ],


    Engineer: [
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
    {
        type: "list",
        message: "would you like to add another employee?",
        name: "addNew", 
        choices: ["yes", "no"]
    }
    ],

     Intern: [
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
    {
        type: "list",
        message: "would you like to add another employee?",
        name: "addNew", 
        choices: ["yes", "no"]
    }
    ]
};

const selectRole = [
    {
        type: "list",
        name: "role",
        message: "Please choose the role for the employee:",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

function addNewEmployee() {
  inquirer.prompt(selectRole)
    .then(response => {
        if (response.role === "Manager") {
            inquirer.prompt(questions.Manager)
                .then(response => {
                    console.log("responses", response);
                    //Manager is our model in which we can make an object out of, which has predefined methods like getEmail(), and so we create a new manager employee object out of this model
                    //the same applies to Engineer and Inter
                    const manager = new Manager
                        (
                            response.name,
                            response.id,
                            response.email,
                            response.officeNumber
                        );
                    //once we create our new employee object, we add it into our array
                    Staff.push(manager);
                    
                    if (response.addNew === "yes") {
                        addNewEmployee();
                    } else {
                        generate();
                    }
                });
        } else if (response.role === "Engineer") {
            inquirer.prompt(questions.Engineer)
                .then(response => {
                    const engineer = new Engineer
                        (
                            response.name,
                            response.id,
                            response.email,
                            response.github
                        );
                    Staff.push(engineer);
                    if (response.addNew === "yes") {
                        addNewEmployee();
                    } else {
                        generate();
                    };
                });
        } else if (response.role === "Intern") {
            inquirer.prompt(questions.Intern)
                .then(response => {
                    const intern = new Intern
                        (
                            response.name,
                            response.id,
                            response.email,
                            response.school
                        );
                    Staff.push(intern);
                    if (response.addNew === "yes") {
                        addNewEmployee();
                    } else {
                        generate();
                    };
                });
        };
    });
};

//we run the function after we define it
addNewEmployee();

//this function will be in charge of creating our html file with the html we create in template.js
function generate() {
    console.log ("staff object", Staff);
    //outputPath is the variable we assigned with the directory in which our html file will be created in
    //utf-8 is the html format file name
    //before we create the file, we call render(Staff), which will create the html we want, and then the file will be create in our Output folder
    //                where         what         format
    fs.writeFileSync(outputPath, render(Staff), "utf-8");
    process.exit(0);
}