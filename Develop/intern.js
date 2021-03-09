const inquirer = require('inquirer');
const Employee = require('./employee');

class Intern extends Employee {
    constructor(school){
        this.school = school

        super(name, id, email)
        
    }
    getSchool(){}

    getRole(){}
}

module.exports = Intern;