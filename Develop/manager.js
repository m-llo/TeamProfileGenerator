const Employee = require('./employee');


class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
        this.name = name;
        this.email = email;
        this.id = id;


    }
    getOfficeNum() {
        return this.officeNum
    }
    getRole() {
        return "Manager"
    }
    printInfo() {
        console.log("mgr name: ", this.name)
        console.log("mgr email: ", this.email)
        console.log("mgr id: ", this.id)
        console.log("mgr number: ", this.officeNum)
    }
}



module.exports = Manager;

