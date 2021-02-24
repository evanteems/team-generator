const Manager = require("./lib/Manager");

test(' Creating a Manager Object', () => {
    const manager = new Manager('Evan', '3', 'teems@gmail.com');

    expect(manager.name()).toBe('Evan');
    expect(manager.id()).toBe('3');
    expect(manager.email()).toBe('teems@gmail.com');
});

test(' Creating a valid Manager method', () => {
    const manager = new Manager('Evan', '3', 'teems@gmail.com', '5', 'Manager');

    expect(manager.officeNumber()).toBe('5');
    expect(manager.getRole()).toBe('Manager');
});