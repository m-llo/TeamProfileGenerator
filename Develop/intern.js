const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.name = name;
        this.id = id;
        this.email = email;



    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
    printInfo() {
        console.log("intern name: ", this.name)
        console.log("intern email: ", this.email)
        console.log("intern id: ", this.id)
        console.log("intern school: ", this.school)
    }
}

module.exports = Intern;