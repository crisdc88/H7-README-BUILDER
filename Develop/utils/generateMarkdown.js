function generateMarkdown(data) {
  // console.log("inside generate", data);
  return `  
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors

${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

## Author

<img src="${data.avatar}" alt="avatar" style="border-radius:16px" width="30"/>

email: ${data.githubusername}@gmail.com

[GitHub Account](https://${data.githubaccount})

[LinkedIn Account](${data.linkedin})


## License

![license](https://img.shields.io/badge/license-${data.license}-green)
`
    ;
}

module.exports = generateMarkdown;
