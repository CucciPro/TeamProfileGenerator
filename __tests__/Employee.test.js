const Employee = require('../lib/Employee')

test('Create test employee', () => {
    const employee = new Employee('test', '001', 'test@test.com');

    expect(employee.name).toBe('test');
    expect(employee.id).toBe('001');
    expect(employee.email).toBe('test@test.com');
});

test('Check getName function', () => {
    const employee = new Employee('test', '001', 'test@test.com');

    expect(employee.getName()).toBe('test')
});

test('Check getID function', () => {
    const employee = new Employee('test', '001', 'test@test.com');

    expect(employee.getID()).toBe('001')
});

test('Check getEmail function', () => {
    const employee = new Employee('test', '001', 'test@test.com');

    expect(employee.getEmail()).toBe('test@test.com')
});

test('Check getRole function', () => {
    const employee = new Employee('test', '001', 'test@test.com');

    expect(employee.getRole()).toBe('Employee')
});