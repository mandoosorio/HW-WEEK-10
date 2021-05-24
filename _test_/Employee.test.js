const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const Employee = new Employee();
  expect(typeof Employee).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const Employee = new Employee("Ruth");
  expect(Employee.name).toBe("Ruth");
});

test("Can set id via constructor argument", () => {
  const Employee = new Employee("Ruth", 1);
  expect(Employee.id).toBe(1);
});

test("Can set email via constructor argument", () => {
  const Employee = new Employee("Ruth", 1, "ruth@email.com");
  expect(Employee.email).toBe("ruth@email.com");
});

test("Can get name via getName()", () => {
  const testName = "Ruth";
  const Employee = new Employee(testName);
  expect(Employee.getName()).toBe(testName);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const Employee = new Employee("Ruth", testValue);
  expect(Employee.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "email@mail.com";
  const Employee = new Employee("Ruth", 1, testValue);
  expect(Employee.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const Employee = new Employee("Ruth", 1, "ruth@email.com");

  expect(Employee.getRole()).toBe("Employee");
});