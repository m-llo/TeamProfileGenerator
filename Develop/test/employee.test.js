const Employee = require('../employee');

describe("Employee", ()=>{
    describe("getName", ()=>{
        it("Should return the name of the employee",() =>{
            const joe = new Employee("Joe", 12345, "joe@joe.com");

            const name = joe.getName();
            
            expect(name).toEqual("Joe")
        });
    });
    describe("getId", ()=>{
        it("Should return the id of the employee",() =>{
            const joe = new Employee("Joe", "12345", "joe@joe.com");

            const id = joe.getId();
            
            expect(id).toEqual("12345")
        });
    });
    describe("getEmail", ()=>{
        it("Should return the email of the employee",() =>{
            const joe = new Employee("Joe", 12345, "joe@joe.com");

            const email = joe.getEmail();
            
            expect(email).toEqual("joe@joe.com")
        });
    });
    describe("getRole", ()=>{
        it("Should return the role of the employee",() =>{
            const joe = new Employee("Joe", 12345, "joe@joe.com");

            const role = joe.getRole();
            
            expect(role).toBe("employee")
        });
    });
})