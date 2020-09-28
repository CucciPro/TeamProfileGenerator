const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('Create test engineer', () => {
    const engineer = new Engineer('test', '001', 'test@test.com', 'CucciPro');

    expect(engineer.name).toBe('test');
    expect(engineer.id).toBe('001');
    expect(engineer.email).toBe('test@test.com');
    expect(engineer.github).toBe('CucciPro');
});

test('Check getGithub function', () => {
    const engineer = new Engineer('test', '001', 'test@test.com', 'CucciPro');

    expect(engineer.getGithub()).toBe('CucciPro');
});

test('Check getRole function', () => {
    const engineer = new Engineer('test', '001', 'test@test.com', 'CucciPro');

    expect(engineer.getRole()).toBe('Engineer');
});