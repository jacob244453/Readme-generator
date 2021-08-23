var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// question for the user //
let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },{
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },{
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "GVL-GPL 3.0",
            "MIT",
            "BSD 3",
            "None"
        ],
    },{
        type: "input",
        message: "Please describe the repository.",
        name: "description"
    }
];


// write to the ReadMe.md file. //
inquirer.prompt(questions).then(function(response) {
   console.log(response);
   
    var content = fileGenerator(response);
    console.log(content);
     fs.writeFile("./ReadMe.md", content, function(err){
         if (err) throw err
         console.log("success");
     });
} ); 