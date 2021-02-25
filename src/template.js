const bTeam = teamArr => {
    const bManagers = manager => {
        return `
        <div class="card col employee-card" style="width: 18erm;">
        <div class="b-card h-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><h3><i class="fas fa-mug-hot"></i>${manager.getRole()}</h3>
        </div>
        <div class="b-card">
        <ul class="list-group list-flush">
        <li class="list-group-item">Employee ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        </div>
        `;
    };

    const bEngineer = engineer => {
        return `
        <div class="card col employee-card" style="width: 18erm;">
        <div class="b-card h-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><h3><i class="fas fa-glass"></i>${engineer.getRole()}</h3>
        </div>
        <div class="b-card">
        <ul class="list-group list-flush">
        <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">Github: <a href="https:github.com">${engineer.getGithub()}</a></li>
        </ul>
        </div>
        </div>
        `;
    };

    const bIntern = intern => {
        console.log(intern)
        return `
        <div class="card col employee-card" style="width: 18erm;">
        <div class="b-card h-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><h3><i class="fas fa-glass"></i>${intern.getRole()}</h3>
        </div>
        <div class="b-card">
        <ul class="list-group list-flush">
        <li class="list-group-item">Employee ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: <a href="https:github.com">${intern.getSchool()}</a></li>
        </ul>
        </div>
        </div>
        `;
    };

    const html = [];

    html.push(teamArr.filter(Employee => Employee.getRole() == 'Manager')
    .map(manager=> bManagers(manager)))

    html.push(teamArr.filter(Employee => Employee.getRole() == 'Intern')
    .map(intern=> bIntern(intern)))

    html.push(teamArr.filter(Employee => Employee.getRole() == 'Engineer')
    .map(engineer=> bEngineer(engineer)))

    console.log(html)
    return html.join("")
}

module.exports = Tteam => {
    console.log(Tteam)
    return `
    <DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewpoint" content="width=device-width,initial-scale="1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>The Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        intergrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcMr7x93voRxT2MZw1T" crossorigin="anonymus">
    <link rel="stylesheet" href="./dist/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-2 team-heading">
                <h1 class="text-center">The Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team=area col-10 d-flex justify-content-center">
                ${bTeam(Tteam)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
}