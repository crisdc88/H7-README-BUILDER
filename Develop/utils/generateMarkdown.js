function generateMarkdown(data) {
  var dataKeys = Object.keys(data)[0];

  console.log("this", dataKeys);
  console.log("this title" ,  data.title);
  


  
    // * Table of Contents
    // * Installation
    // * Usage
    // * License
    // * Contributing
    // * Tests
    // * Questions


  


  return `
# ${data.title}
`;
}

module.exports = generateMarkdown;
