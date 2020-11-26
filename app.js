const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function newEmployee() {
    inquirer.prompt([{
        message: 'Enter team members name',
        name: name,
    },
    {
        type: "list",
        message: "Please select the team members role",
        choices: [
            'Engineer',
            'Intern',
            'Manager'
        ],
        name: 'role'
    },
    {
        message: 'Please enter a team members id',
        name: 'id'
    },
    {
        message: 'Please enter employees email',
        name: 'Email'
    },
]);
}