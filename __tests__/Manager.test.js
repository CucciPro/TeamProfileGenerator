const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Create test manager', () => {
    const manager = new Manager('test', '001', 'test@test.com', '201');

    expect(manager.name).toBe('test');
    expect(manager.id).toBe('001');
    expect(manager.email).toBe('test@test.com');
    expect(manager.officeNumber).toBe('201');
});

test('Check getRole function', () => {
    const manager = new Manager('test', '001', 'test@test.com', '201');

    expect(manager.getRole()).toBe('Manager');
});