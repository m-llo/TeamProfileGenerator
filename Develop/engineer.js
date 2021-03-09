const inquirer = require('inquirer');
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github){
        this.github = github

        super(name, id, email)
        
    }
    getGitHub(){};

    getRole(){};
}

module.exports = Engineer;