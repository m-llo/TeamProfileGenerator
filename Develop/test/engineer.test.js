
const Engineer = require('../Engineer');

describe("Engineer", ()=>{
    describe("getGitHub", ()=>{
        it("Should return the Github of the Engineer",() =>{
            const tom = new Engineer("tom", 12345, "tom@tom.com", "Tommy-Tom");

            const gitHub = tom.getGitHub();
            
            expect(gitHub).toEqual("Tommy-Tom")
        });
    });
    describe("getRole", ()=>{
        it("Should return the role of the Engineer",() =>{
            const tom = new Engineer("tom", "12345", "tom@tom.com",  "Tommy-Tom");

            const role = tom.getRole();
            
            expect(role).toBe("Engineer")
        });
    });
})