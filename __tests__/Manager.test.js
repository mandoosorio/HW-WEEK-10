const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const e = new Manager("Ruth", 1, "ruth@email.com", 101);
  expect(e.officeNumber).toBe(101);
});

test('getRole() should return "Manager"', () => {
  const e = new Manager("Ruth", 1, "ruth@email.com", 101);
  expect(e.getRole()).toBe("Manager");
});

test("Can get office number via getOffice()", () => {
  const e = new Manager("Ruth", 1, "ruth@email.com", 101);
  expect(e.getOfficeNumber()).toBe(101);
});