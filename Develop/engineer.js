const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.name = name;
        this.id = id;
        this.email = email;



    }
    getGitHub() {
        return this.github
    };

    getRole() {
        return "Engineer"
    };
    printInfo() {
        console.log("eng name: ", this.name)
        console.log("eng email: ", this.email)
        console.log("eng id: ", this.id)
        console.log("eng github: ", this.github)
    }
}

module.exports = Engineer;