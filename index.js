// Classes begin here!!!!
const Employee = require("./lib/employee");

const Manager = require("./lib/manager");

const Engineer = require("./lib/engineer");

const Intern = require("./lib/intern");

// Dependencies Begin Here!!!!
const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

const render = require("./src/template");

const output = path.resolve(__dirname, "output");
const outputPath = path.join(output, "generator.html")
let teamArr = [];

function addManagers() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please insert Manager's name here:",
            name: "managerName"
        },
        {
            type: "input",
            message: "Please insert Manager's ID here:",
            name: "managerId",
        },
        {
            type: "input",
            message: "Please insert Manager's Email here:",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "Please insert Manager's Office Number here:",
            name: "officeNumber",
        },
    ]).then(res => {
        console.log(res);
        const Manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.officeNumber)
        teamArr.push(Manager)
        addtMembers();

    });
};

function addtMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'Chosen',
            message: "Please choose what team member you would like to add here:",
            choices: [ 'Engineer', 'Intern', 'Team is complete!']
        }
    ])
    .then (res => {
        console.log(res);

        if (res.Chosen === 'Engineer') {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Please insert Engineer's Name here:",
                    name: "engineerName",
                },
                {
                    type: "input",
                    message: "Please insert the Engineer's Id here:",
                    name: "engineerId",
                },
                {
                    type: "input",
                    message: "Please insert the Engineer's email here:",
                    name: "engineerEmail",
                },
                {
                    type: "input",
                    message: "Please insert the Engineer's github username here:",
                    name: "engineerGithub",
                }
            ])
            .then(res => {
                const enginner = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.engineerGithub)
                teamArr.push(enginner)
                console.log('Success! You have added an Engineer!');
                addtMembers();
            })
        } else if (res.Chosen === 'Intern') {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Please insert the Intern's name:",
                    name: "internName",
                },
                {
                    type: "input",
                    message: "Please insert Intern's Id here:",
                    name: "internId",
                },
                {
                    type: "input",
                    message: "Please insert the Intern's email here:",
                    name: "internEmail",
                },
                {
                    type: "input",
                    message: "PLease insert the Intern's School here:",
                    name: "internSchool",
                },
            ])
            .then(res => {
                const intern = new Intern(res.internName, res.internId, res.internEmail, res.internSchool)
                teamArr.push(intern)
                console.log('Sucess! You have added an Intern!')
                addtMembers();
            })
        } else {
            console.log('Sucess your team is completed and ready to go!!')
            buildPage();
            return

        }
    });
};

// Functions called here!!!
addManagers();

// Created team function shown here!!
function buildPage()
{
    if (!fs.existsSync(ouptut)) {
        fs.mkdirSync(output)
    }
    fs.writeFileSync(outputPath, render(teamArr), 'utf-8');
}