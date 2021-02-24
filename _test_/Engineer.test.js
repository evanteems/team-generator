const { hasUncaughtExceptionCaptureCallback } = require("process");
const Engineer = require("./lib/engineer");

test('Creating an object for engineer', () => {
    const engineer = new Engineer('Evan', '2', 'evanteems@gmail.com');

    expect(engineer.name).toBe('Evan');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('evanteems@gmail.com');

});

test('Creating a valid engineer method', () => {
    const engineer = new Engineer('Evan', '2', 'evanteems@gmail.com', 'evanteems', 'Engineer');

    expect(engineer.getGithub()).toBe('evanteems');
    expect(engineer.getRole()).toBe('Engineer');
});