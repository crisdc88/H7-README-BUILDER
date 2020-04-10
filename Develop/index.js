let inquirer = require("inquirer");
let fs = require("fs");
let generateMarkdown = require("./utils/generateMarkdown");
let axios = require("axios");


const questions = [
    {
        type: "input",
        Description: "Enter Title",
        name: "title"
    },
    // {
    //     type:
    // }
    //  "Title", "Description"
    // * Table of Contents
    // * Installation
    // * Usage
    // * License
    // * Contributing
    // * Tests
    // * Questions

];

function writeToFile(fileName, data) {
}

function init() {

    inquirer.prompt(questions).then(function(response){

        console.log(response);


        axios.get("https://api.github.com/users/crisdc88/events/public").then(function(axiosResponse){
            // console.log(axiosResponse.data);

        })
        
    



        fs.appendFile("README.md", generateMarkdown(response), function(error){

            if(error){
                console.log("there was an error writing into the file");
            }
        })


        
    })

  
    // prompt questions

    // make API call to get github info  -- image and email

    // make file.
}

init();
