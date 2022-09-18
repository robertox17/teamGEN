
const fs = require('fs')
const inquirer = require('inquirer');

const Enginer = require('./lib/enginer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const generateHTML = require('./scr/generateHTML')

const managers = [];
const enginer = [];
const interns = [];


function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                messege: 'What is the managers name?'
            },
            {
                type: 'input',
                name: 'id',
                messege: 'What is the managers ID?'
            },
            {
                type: 'input',
                name: 'email',
                messege: 'What is the managers email?'
            },
            {
                type: 'input',
                name: 'officeNumer',
                messege: 'What is the managers office number?'
            },
        ]).then(answers => {
            
            const { id, email, name, officeNumber } = answers;
            managers.push(new Manager(id, email, name, officeNumber));

            

            createTeam()
        });
    }
function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                messege: 'What is the interns name?'
            },
            {
                type: 'input',
                name: 'id',
                messege: 'What is the interns ID?'
            },
            {
                type: 'input',
                name: 'email',
                messege: 'What is the interns email?'
            },
            {
                type: 'input',
                name: 'school',
                messege: 'What is the Interns school name?'
            },
        ]).then(answers => {
            
            const{id , email , name , school} = answers;
            interns.push(new Intern(id , email , name , school));
            
            createTeam();
        });

}

    function createEnginer(){
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                messege: 'What is the managers name?'
            },
            {
                type: 'input',
                name: 'id',
                messege: 'What is the managers ID?'
            },
            {
                type: 'input',
                name: 'email',
                messege: 'What is the managers email?'
            },
            {
                type: 'input',
                name: 'github',
                messege: 'What is the enginers github useername?'
            },
        ]).then(answers => {
            
            const{id , email , name , github} = answers;
            enginer.push(new Enginer(id , email , name , github));
            
            createTeam()
            
        });
    }
    function createTeam() { 
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'optionsList',
                    messege: 'Which type of employe would you like to add?',
                    choices: ['Enginer', 'Intern', 'None']
                },

            ]).then(answers => {

                switch (answers.optionsList) {
                    case 'Enginer':
                        createEnginer()
                        break;
                    case 'Intern':
                        createIntern();
                        break;
                    default:
                        fs.writeFileSync('./dist/team.html',generateHTML({managers , enginer , interns}));
                        return;
                }

            });
    }


createManager();