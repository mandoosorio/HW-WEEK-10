const generateTeam = team => {
const generateManager = manager => {
    return `
    <p> ${manager.getName} </p>
    <p> ${manager.getRole}</p>
    <p> ${manager.getID}</p>
    <p> ${manager.getEmail}</p>
    <p> ${manager.getOfficeNumber}</p>
    `;
};
const html = [];
html.push (generateManager); 
    // html.push (
    //     team.filter (Employee => Employee.getRole () === "Manager")
    //     .map (Manager => generateManager (
    //         Manager
    //     ))
    // )
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