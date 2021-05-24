const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const employee = new Employee("Ruth");
  expect(employee.name).toBe("Ruth");
});

test("Can set id via constructor argument", () => {
  const employee = new Employee("Ruth", 1);
  expect(employee.id).toBe(1);
});

test("Can set email via constructor argument", () => {
  const employee = new Employee("Ruth", 1, "ruth@email.com");
  expect(employee.email).toBe("ruth@email.com;
});

test("Can get name via getName()", () => {
  const testName = "Ruth";
  const employee = new Employee(testName);
  expect(employee.getName()).toBe(testName);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Steve", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "email@mail.com";
  const employee = new Employee("Steve", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const employee = new Employee("Ruth", 1, "ruth@email.com");

  expect(employee.getRole()).toBe("Employee");
});