const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const {baseTemplate } = require('./createhtml');

const employees =[];
// start with getting manager info using inquirer then create html file with manager card
createManager = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the manager's name?",
        name: 'mgrname',
      },
      {
        type: 'input',
        message: "What is the manager's id number?",
        name: 'mgrid',
      },
      {
        type: 'input',
        message: "What is the manager's email address?",
        name: 'mgremail',
      },
      {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'mgrnum',
      },
      // After getting manager info ask which employee role they want to create next (list) choices would be intern engineer or I am finished. 
      {
        type: 'list',
        message: 'What type of role would you like to create next?',
        name: 'mgrnxt',
        choices: ['Engineer', 'Intern', 'None, I am finished.'],
      },
    ]).then((info) => {
      const mgrname = info.mgrname;
      const mgrid = info.mgrid;
      const mgremail = info.mgremail;
      const mgrnum = info.mgrnum;
     
      const manager = new Manager(mgrname, mgrid, mgremail, mgrnum);
      employees.push(manager)
      const mgrnxt = info.mgrnxt
      // switch function depending on next step responses go through questions and append each card to created file
      switch (mgrnxt) {
        case 'Engineer':
          return createEngineer(manager), manager;
        case 'Intern':
          return createIntern(manager), manager;
        case 'None, I am finished.':
          return profile(employees);
        default:
          return "Please select a next step."
      }
      ;
    })

}

createIntern = (manager, engineer) => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the intern's name?",
        name: 'intname',
      },
      {
        type: 'input',
        message: "What is the intern's id number?",
        name: 'intid',
      },
      {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'intemail',
      },
      {
        type: 'input',
        message: "What is the intern's school name?",
        name: 'intschool',
      },
      {
        type: 'list',
        message: 'What type of role would you like to create next?',
        name: 'intnxt',
        choices: ['Engineer', 'Intern', 'None, I am finished.'],
      },
    ]).then((info) => {
      const intname = info.intname;
      const intid = info.intid;
      const intemail = info.intemail;
      const intschool = info.intschool;

      const intern = new Intern(intname, intid, intemail, intschool)
      employees.push(intern)
      const intnxt = info.intnxt
      switch (intnxt) {
        case 'Engineer':
          return createEngineer(intern), intern;
        case 'Intern':
          return createIntern(), intern;
        case 'None, I am finished.':
          return profile(employees);
        default:
          return "Please select a next step."
      }
    })
}

createEngineer = (manager, intern) => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engname',
      },
      {
        type: 'input',
        message: "What is the engineer's id number?",
        name: 'engid',
      },
      {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engemail',
      },
      {
        type: 'input',
        message: "What is the engineer's github name?",
        name: 'enggithub',
      },
      {
        type: 'list',
        message: 'What type of role would you like to create next?',
        name: 'engnxt',
        choices: ['Engineer', 'Intern', 'None, I am finished.'],
      },
    ]).then((info) => {
      const engname = info.engname;
      const engid = info.engid;
      const engemail = info.engemail;
      const enggithub = info.enggithub;

      const engineer = new Engineer(engname, engid, engemail, enggithub);
      employees.push(engineer);
      const engnxt = info.engnxt
      switch (engnxt) {
        case 'Engineer':
          return createEngineer(), engineer;
        case 'Intern':
          return createIntern(manager, engineer), engineer;
        case 'None, I am finished.':
          return profile(employees);
        default:
          return "Please select a next step."
      }
    })
}

const profile = (employees) =>{ 
  const generateProfile = baseTemplate(employees);
    fs.writeFile("profile.html", generateProfile, (err) => {
      err ? console.error(err) : console.log('Success!')
    })
    };

 
init = () => {
  createManager()
}
init()
