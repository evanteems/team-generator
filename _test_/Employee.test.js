const Employee = require("./lib/employee");

test(' Creating a manager object', () => {
    const employee = new Employee('Evan', '1', 'evanteems@yahoo.com');

    expect(employee.name).toBe('Evan');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('evanteems@yahoo.com');

});

test(' Checking for vaildity employee methods, getName, getId, getEmail, getRole', () => {
    const employee = new Employee('Evan', '1', 'evanteems@yahoo.com');

    expect(employee.getName()).toBe('Evan');
    expect(employee.getId()).toBe('1');
    expect(employee.getEmail()).toBe('evanteems@yahoo.com');

    expect(employee.getRole()).toBe('Employee')
})