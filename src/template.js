//this is where we will tell javascript how we want our html page to look

//our generateTeam function takes in a parameter, and we call that parameter "team" in this file.
//the parameter will come from our index.js file when we call the render function.
//in line 180 of index.js, we call render(Staff), making Staff our parameter.
//Staff in index.js is our array of employees.
//so we are passing in our employee array into our generateTeam function.
const generateTeam = team => {
    //these three generate functions don't get called yet (generateManager/Engineer/Inter)
    //we are only defining them, they will get called below
    const generateManager = manager => {
        //we are only rendering p for ease, but we can write in any html we want
        //remember one back tick has to stay on the same line as the return key word, otherwise the code becomes unreachable
        return `
        <p> ${manager.getName()} </p>
        <p> ${manager.getRole()}</p>
        <p> ${manager.getId()}</p>
        <p> ${manager.getEmail()}</p>
        <p> ${manager.getOfficeNumber()}</p>
        `;
        //generateManager gets called when we are looping or mapping through all our manager employees from our Staff array.
        //because each employee in our Staff array was created using a constructor, each employee has methods/functions that return values (as defined in our models from our lib folder)
        //that's why we are able to use functions defined in our lib folder and get values
        //and the same applies for he below functions for generateEngineer and generateIntern
    };

    const generateEngineer = engineer => {
        return `
        <p> ${engineer.getName()} </p>
        <p> ${engineer.getRole()}</p>
        <p> ${engineer.getId()}</p>
        <p> ${engineer.getEmail()}</p>
        <p> ${engineer.getGithub()}</p>
        `;
    };

    const generateIntern = intern => {
        return `
        <p> ${intern.getName()} </p>
        <p> ${intern.getRole()}</p>
        <p> ${intern.getId()}</p>
        <p> ${intern.getEmail()}</p>
        <p> ${intern.getSchool()}</p>
        `;
    };

    //this is the array that will hold the html that we create for each employee
    const html = [];

    //before we push or add anything to the array, we need to specify what we want to add
    html.push(
        //team is still our Staff array from index.js so we need to loop through that array and find all the employees whos role is a manager
        //once we find all the managers in our Staff array, we tell the code to render html for each manager we have
        team.filter (Employee => Employee.getRole() === "Manager")
        //map means looping through all our managers, calling the generateManager function for each manager
        .map (Manager => generateManager(Manager))
    );
    html.push(
        //we repeat the same process but this time looking for all our engineer employees
        team.filter (Employee => Employee.getRole() === "Engineer")
        //for each engineer, call the function to generate the engineer's html
        .map (Engineer => generateEngineer(Engineer))
    );
    html.push(
        //and now our interns
        team.filter (Employee => Employee.getRole() === "Intern")
        //for each intern, call the function to generate the intern's html
        .map (Intern => generateIntern(Intern))
    );

    //since html is an array, we need to join all the array items so we get one big string and that string is what we render onto the html page we create
    //so now, below when we call generateTeam(Staff), we are calling all this code^^ which will eventually just be converted to html language
    //in essence, we turned our Staff array into html
    return html.join ("");
};

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="shortcut icon" type="img/svg" href="">
        <!-- Linked Stylesheets -->
        <link rel="stylesheet" href="./reset.css" type="text/css">
        <link rel="stylesheet" href="./style.css" type="text/css">
    </head>
    <body> 
        ${generateTeam (team)} 
    </body>
    </html>
    `
}