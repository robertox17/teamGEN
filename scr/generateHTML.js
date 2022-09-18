const generateTeam = function (team) {
    let html = '';

    team.managers.forEach(function (manager) {
        html += `
    <article class="card col-md-4 p-3">
    <div class="card">
        <div class="card-header">
            <h2>${manager.getName()}<i class="fa-solid fa-mug-hot"></i></h2>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID : ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
        </ul>
    </div>
</article>
`;
    });
    team.enginer.forEach(function (enginer) {
        html += `
        <article class="card col-md-4 p-3">
        <div class="card">
            <div class="card-header">
                <h2>${enginer.getName()}<i class="fa-solid fa-mug-hot"></i></h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID : ${enginer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${enginer.getEmail()}">${enginer.getEmail()}</a></li>
                <li class="list-group-item"><a href="https://github.com/${enginer.getGithub()} ">${enginer.getGithub()}</a></li>
            </ul>
        </div>
    </article>
    `;
    });
    team.interns.forEach(intern =>{
        html +=`
        <article class="card col-md-4 p-3">
        <div class="card">
            <div class="card-header">
                <h2>${intern.getName()}<i class="fa-solid fa-graduation-cap"></i></h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID : ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()} </li>
            </ul>
        </div>
    </article>
    `;

    })

    return html;

}





const generateHTML = function (team) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="../scr/styles.css"></link>
         <title>Team Generator</title>
    </head>
    <body>
    <header class="container1 container-fluid text-center p-5">
            <h1>My Team</h1>
    
        </header>
        <main class="container text-center p-5">
            <section class="row" >
                ${generateTeam(team)}
            </section>
        </main>
    </body>
    </html>`
};

module.exports = generateHTML






