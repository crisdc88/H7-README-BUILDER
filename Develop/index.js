let inquirer = require("inquirer");
let fs = require("fs");
let generateMarkdown = require("./utils/generateMarkdown");
let axios = require("axios");


const questions = [

    {
        type: "input",
        message: "Enter Title of your project",
        name: "title"
    },
    {
        type: "input",
        message: "Enter the description",
        name: "description"
    },
    {
        type: "input",
        message: "Installation. please enter a step by step series of examples that tell you how to get a development env running",
        name: "installation"
    },
    {
        type: "input",
        message: "usage",
        name: "usage"
    },
    {
        type: "input",
        message: "contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "tests",
        name: "tests"
    },
    {
        type: "input",
        message: "questions",
        name: "questions"
    },
    {
        type: "input",
        message: "please enter gitHub user name",
        name: "githubusername"
    },
    {
        type: "input",
        message: "please enter GitHub account",
        name: "githubaccount"
    },

    {
        type: "input",
        message: "please enter LinkedIn account",
        name: "linkedin"
    },
    {
        type: "list",
        message: "Choose License",
        name: "license",
        choices: ["MIT"]
    }
];



function init() {

    inquirer.prompt(questions).then(function (response) {

        let githubAccount = response.githubusername;
        let gitHubURL = "https://api.github.com/users/" + githubAccount + "/events/public";

        axios.get(gitHubURL).then(function (axiosResponse) {
            // console.log(axiosResponse.data);

            let avatar = axiosResponse.data[0].actor.avatar_url;
            // console.log("this is the avatar",avatar);
            response["avatar"] = avatar;

            let gHEmail = axiosResponse.data[0].payload.commits[0].author.email;
            // console.log("inside ", gHEmail);
            response["email"] = gHEmail;

            // writing to file:
            fs.appendFile("README.md", generateMarkdown(response) + "\n", function (error) {
                if (error) {
                    console.log("there was an error writing into the file");
                }
            })
        });
    })

}

init();
