const fs = require('fs');
const Manager = require('./manager');
const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');

const utils = {
    mgrCard: (manager) => {
        return `
 <div class="card id m-4">
     <div class="card-header title"> 
       <h5 class="headinfo">${manager.name}</h5>
       <h6 class="headinfo">Manager</h6>
     </div>
  <div class="card-body">
      <p class="card-text">ID: ${manager.id}</p>
      <p class="card-text">Ph: ${manager.officeNum}</p>
      <p class="card-text">Email:<a href="mailto:${manager.email}" target="_blank" class="card-text">${manager.email}</a></p>
   </div>
</div>`
    },
    engCard: (engineer) => {
        return `
    <div class="card id m-4">
        <div class="card-header title"> 
          <h5 class="headinfo">${engineer.name}</h5>
          <h6 class="headinfo">Engineer</h6>
        </div>
     <div class="card-body">
         <p class="card-text">ID: ${engineer.id}</p>
         <p class="card-text">Email:<a href="mailto:${engineer.email}" target="_blank" class="card-text">${engineer.email}</a></p>
         <p class="card-text">Github:<a href="http://github.com/${engineer.github}" target="_blank" class="card-text">${engineer.github}</a></p>
      </div>
   </div>`

    },
    intCard: (intern) => {
        return `
   <div class="card id m-4">
        <div class="card-header title"> 
          <h5 class="headinfo">${intern.name}</h5>
          <h6 class="headinfo">Intern</h6>
        </div>
     <div class="card-body">
         <p class="card-text">ID: ${intern.id}</p>
         <p class="card-text">School ${intern.school}</p>
         <p class="card-text">Email:<a href="mailto:${intern.email}" target="_blank" class="card-text">${intern.email}</a></p>
      </div>
   </div>`
    },

    baseTemplate: (employees) => {
        function makeCards(employees) {
            let html = ""
            employees.forEach(element => {
                let role = element.getRole();
                if (role === 'Manager') {
                    html += utils.mgrCard(element)
                } else if (role === 'Intern') {
                    html += utils.intCard(element)
                } else if (role === 'Engineer') {
                    html += utils.engCard(element)

                } else { throw new Error("Employee type undefined") }

            });
            return html
        }
        let html =
            `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
            <link href="../assets/style.css" rel="stylesheet">
        </head>
        <body>
 <div class="container">
    <div class="row">
        <div class="col text-center p-5" id="header">
                 My Team
        </div>
    </div>
    <div class="row" id="main">
     ${makeCards(employees)}
     </div>
     </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
         integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
        
    </body>
    </html>
    
   `
        return html
    }

}
module.exports = utils;