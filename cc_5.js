//U46368100
// implementing the employee class
class Employee {
    // employee constructor
    constructor(name, salary) {
        this.empName = name;
        this.empSalary = salary;
        console.log(`Name of Employee: ${this.empName}`);
        console.log(`Salary of Employee: ${this.empSalary}`);
    }
    //calculating the Employee Annual Salary
    calculateEmpAnnualSalary() {
        let annualSalary=this.empSalary * 12;
        console.log(`Employee Annual Salary: $${annualSalary}`);
        //returning the annual Salary of employee
        return annualSalary;
    }

}






