const { TestResult } = require("@jest/types");
const Employee = require("../lib/Employee");


describe('Employee', () => {
    test('Should be an Object', () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    test("should  set name", () => {
        const name = "Alysia";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
});