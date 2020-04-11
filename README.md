# H7-README-BUILDER

This application will generate a README.md file.

## GettingStarted

Project Location

>[Project's GitHub repository](https://github.com/crisdc88/H7-README-BUILDER)

## Prerequisites

>N/A

## Built With

* Node js

## Deployed Link

>N/A

## Code-Snippets

1. Open index.js
2. Find the following code showing API calls to gitHub's API, and adding information to the response in order to generate the README.md file.

```sh

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

```

## Author

<img src="https://avatars.githubusercontent.com/u/61372364?" alt="avatar" style="border-radius:20px" width="30"/>

D. Cristina Terry

GitHub: [https://github.com/crisdc88/](https://github.com/crisdc88/),

LinkedIn: [www.linkedin.com/in/dcristinaterry](www.linkedin.com/in/dcristinaterry)

## License

![license](https://img.shields.io/badge/license-MIT-green)
