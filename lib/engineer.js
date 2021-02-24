const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, Github) {
        super(name, id, email);
        this.github = Github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;