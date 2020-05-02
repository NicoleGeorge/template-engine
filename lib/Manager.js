// TODO: Write code to define and export the Employee class
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(employeeName, employeeID, employeeEmail, officeNumber) {
    super(employeeName, employeeID, employeeEmail);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
