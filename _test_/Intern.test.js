const Intern = require("./lib/intern");

test(' Creating an intern project', () => {
    const intern = new Intern('Evan', '4', 'et@yahoo.com');

    expect(intern.name).toBe('Evan');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('et@yahoo.com');
});

test(' Creating a valid intern mathod', () => {
    const intern = new Intern('Evan', '4', 'et@yahoo.com', 'UCLA BootCamp')

    expect(intern.getSchool()).toBe('UCLA BootCamp');
    expect(intern.getRole()).toBe('Intern');
});