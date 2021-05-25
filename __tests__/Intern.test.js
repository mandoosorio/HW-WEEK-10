const Employee = require("../lib/employee.js");
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const Employee = new Intern("Ruth", 1, "ruth@email.com", "USYD");
  expect(Employee.school).toBe("USYD");
});

test("getRole() should return \"Intern\"", () => {
  const Employee = new Intern("Ruth", 1, "ruth@email.com", "USYD");
  expect(Employee.getRole()).toBe("Intern");
});

test("Can get school via getSchool()", () => {
  const Employee = new Intern("Ruth", 1, "ruth@email.com", "USYD");
  expect(Employee.getSchool()).toBe("USYD");
});