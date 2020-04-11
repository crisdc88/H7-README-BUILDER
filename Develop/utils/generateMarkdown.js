function generateMarkdown(data) {
  var dataKeys = Object.keys(data)[0];
  console.log("inside generate", data);



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

<img src="${data.avatar}" alt="avatar" style="border-radius:16px" width="30"/>

## Tests
${data.tests}

## Questions
${data.questions}

## GitHub
${data.github}

## License

![license](https://img.shields.io/badge/license-${data.license}-green)
`
    ;
}

module.exports = generateMarkdown;
