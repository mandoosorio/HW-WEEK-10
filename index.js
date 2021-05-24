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

