const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { type } = require("os");

const employees = [];

function initApp() {
    newEmployee();
}

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
    ])
        .then(function ({ name, role, id, email }) {
            let roleInfo = "",
            if (role === "Engineer") {
                roleInfo = "Github username";
            } else if (role === 'Intern') {
                roleInfo = 'school name'
            } else {
                roleInfo = 'Office phone number';
            }
            inquirer.prompt({

                message: `Please enter team members ${roleInfo}`,
                name: 'roleInfo'
            },
                {
                    type: 'list',
                    message: 'Would you like to add more team members?',
                    choices: [
                        'yes',
                        'no',
                    ],
                    name: 'moreMembers'
                })
                .then(function ({ roleInfo, moreMembers }) {
                    let newMember;
                    if (role === 'Engineer') {
                        newMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === 'Intern') {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    employees.push(newMember);
                    addHtml(newMember)
                        .then(function () {
                            if (moreMembers === 'yes') {
                                newEmployee();
                            } else {
                                finishHtml();
                            };
                        });
                });
        });
}