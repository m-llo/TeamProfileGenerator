
const Manager = require('../manager');

describe("Manager", ()=>{
    describe("getOfficeNum", ()=>{
        it("Should return the office number of the manager",() =>{
            const tom = new Manager("tom", 12345, "tom@tom.com", "1234567890");

            const officeNumber = tom.getOfficeNum();
            
            expect(officeNumber).toEqual("1234567890")
        });
    });
    describe("getRole", ()=>{
        it("Should return the role of the manager",() =>{
            const tom = new Manager("tom", "12345", "tom@tom.com", "1234567890");

            const role = tom.getRole();
            
            expect(role).toBe("Manager")
        });
    });
})