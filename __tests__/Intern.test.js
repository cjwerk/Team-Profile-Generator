const Intern = require("../lib/Intern");

test("Should set school ", () => {
  const testValue = "UCLA";
  const e = new Intern("Nacho", 1, "bob@test.com", testValue);
  expect(e.school).toBe(testValue);
});