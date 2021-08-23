function fileGenerator(response) {
    var content = `# ${response.title}
    Username: ${response.userName} Github: ${response.GitHub} Email: ${response.email}
     
     Repository Description:
        ${response.description}
    
     License:
        ${response.license}.`
    return content;
};

module.exports = fileGenerator;