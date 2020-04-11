let inquirer = require("inquirer");
let fs = require("fs");
let generateMarkdown = require("./utils/generateMarkdown");
let axios = require("axios");


const questions = [

    // {
    //     type: "input",
    //     Description: "Enter Title of your project",
    //     name: "title"
    // },
    // {
    //     type: "editor",
    //     Description: "Enter the description",
    //     name: "description"
    // },
    // {
    //     type: "editor",
    //     Description: "Installation. please enter a step by step series of examples that tell you how to get a development env running",
    //     name: "installation"
    // },
    // {
    //     type: "input",
    //     Description: "usage",  // instructions on how to clone the repository
    //     name: "usage"
    // },
    {
        type: "list",
        Description: "Choose License", // choose one of many options
        name: "license",
        choices: ["MIT"]
    },
    // {
    //     type: "input",
    //     Description: "contributing",  //the steps that someone should do to contribute to the project
    //     name: "contributing"
    // },
    // {
    //     type: "input",
    //     Description: "tests", //if we have test cases, command to run tests
    //     name: "tests"
    // },
    // {
    //     type: "input",
    //     Description: "questions",
    //     name: "questions"
    // },
    {
        type: "input",
        Description: "please enter gitHub account",
        name: "github"
    }
];

function writeToFile(fileName, data) {
}

function init() {

    inquirer.prompt(questions).then(function (response) {
        let githubAccount = response.github


        let gitHubURL = "https://api.github.com/users/" + githubAccount + "/events/public";



        axios.get(gitHubURL).then(function (axiosResponse) {
            // console.log(axiosResponse);

            let avatar = axiosResponse.data[0].actor.avatar_url;
            console.log("this is the avatar",avatar);
            response["avatar"] = avatar;
            let gHEmail = axiosResponse.data[0].payload.commits[0].author.email;
            console.log("inside ", gHEmail);
            response["email"] = gHEmail;
            console.log("inside", response);


            fs.appendFile("README.md", generateMarkdown(response) + "\n", function (error) {

                if (error) {
                    console.log("there was an error writing into the file");
                }
            })



        });


        // console.log("outside email", gHEmail);

        // console.log("this is the final response", response);




    })


    // prompt questions

    // make API call to get github info  -- image and email

    // make file.
}

init();
