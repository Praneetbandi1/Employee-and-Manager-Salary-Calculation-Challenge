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
        let annualSalary = this.empSalary * 12;
        console.log(`Employee Annual Salary: $${annualSalary}`);
        //returning the annual Salary of employee
        return annualSalary;
    }

}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.empDepartment = department;
        console.log(`Employee Department: ${this.empDepartment}`);

    }

    calculateEmpAnnualSalary() {
        let annualSalary = super.calculateEmpAnnualSalary();
        let bonus = this.empSalary * 0.15
        console.log(`Employee Bonus: ${bonus}`);
        let totalAnnualSalary = annualSalary + bonus;
        console.log(`Employee total Annual Salary: $${totalAnnualSalary}`);
        return totalAnnualSalary;

    }
}

// Creating both manager1 and  manager2 object 
let manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
let manager2 = new Manager("Debbie Little",7205, "Finance");

manager1.calculateEmpAnnualSalary();
manager2.calculateEmpAnnualSalary(); 







