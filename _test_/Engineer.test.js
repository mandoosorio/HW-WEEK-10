const Employee = require("../lib/employee.js");
const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor argument", () => {
  const Employee = new Engineer (
    "Ruth", 
    1, 
    "ruth@email.com",
    "ruthgithub"
    );
  expect(Employee.github).toBe("ruthgithub");
});

test("getRole() should return \"Engineer\"", () => {
    const Employee = new Engineer (
    "Ruth", 
    1, 
    "ruth@email.com",
    "ruthgithub",
    );
  expect(Employee.getRole()).toBe("Engineer");
});

test("Can get GitHub username via getGithub()", () => {
    const Employee = new Engineer (
        "Ruth", 
        1, 
        "ruth@email.com",
        "ruthgithub",
        );
  expect(Employee.getGithub()).toBe("ruthgithub");
});