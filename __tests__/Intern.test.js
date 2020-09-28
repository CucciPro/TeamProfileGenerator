const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Create test intern', () => {
    const intern = new Intern('test', '001', 'test@test.com', 'U of A');

    expect(intern.name).toBe('test');
    expect(intern.id).toBe('001');
    expect(intern.email).toBe('test@test.com');
    expect(intern.school).toBe('U of A');
});

test('Check getSchool function', () => {
    const intern = new Intern('test', '001', 'test@test.com', 'U of A');

    expect(intern.getSchool()).toBe('U of A');
});

test('Check getRole function', () => {
    const intern = new Intern('test', '001', 'test@test.com', 'U of A');

    expect(intern.getRole()).toBe('Intern');
});