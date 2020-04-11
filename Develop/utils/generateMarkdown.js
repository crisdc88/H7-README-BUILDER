function generateMarkdown(data) {
  // console.log("inside generate", data);
  return `  
# ${data.title}

## Description
${data.description}

# Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contribute](#Contribute)
4. [Tests](#Tests)
5. [Questions](#Questions)
6. [Author](#Author)
7. [License](#License)
8. [Tests](#Tests)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribute

${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

## Author

<img src="${data.avatar}" alt="avatar" style="border-radius:20px" width="30"/>

email: ${data.email}

[GitHub Account](https://${data.githubaccount})

[LinkedIn Account](${data.linkedin})


## License

![license](https://img.shields.io/badge/license-${data.license}-green)
`
    ;
}

module.exports = generateMarkdown;
