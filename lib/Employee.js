// TODO: Write code to define and export the Employee class

// helloThere  --camel   -- usual var, function
// EmployeeClass -- Pascal Case  Class name
// kebab-case   -- html
// snake_case  -- interchangable with camelcase (up to you)
// UPPER_CASE  -- constant

class Employee {
  // constructor is a func that is called everytime an obj is created from this class
  constructor(employeeName, employeeID, employeeEmail) {
    this.name = employeeName;
    this.id = employeeID;
    this.email = employeeEmail;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;