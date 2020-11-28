const Engineer = require("../lib/Engineer");

test('should set Github info', () => {
    const testValue = "GithubUser";
    const e = new Engineer("Nacho", 2, "bob@test.com", testValue);
    expect(e.github).toBe(testValue);
});