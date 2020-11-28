const Manager = require("../lib/Manager");

test("Should set office number", () => {
  const testValue = 100;
  const e = new Manager("Nacho", 1, "bob@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});