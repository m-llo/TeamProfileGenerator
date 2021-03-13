const Intern = require('../Intern');

describe("Intern", ()=>{
    describe("getSchool", ()=>{
        it("Should return the Github of the Intern",() =>{
            const chris = new Intern("chris", "12345", "chris@chris.com", "Florida State");

            const school = chris.getSchool();
            
            expect(school).toEqual("Florida State")
        });
    });
    describe("getRole", ()=>{
        it("Should return the role of the Intern",() =>{
            const chris = new Intern("chris", "12345", "chris@chris.com",  "Florida State");

            const role = chris.getRole();
            
            expect(role).toBe("Intern")
        });
    });
})