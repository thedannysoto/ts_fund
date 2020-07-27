"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        // Private restricts access to this class;
        // Protected allows access to classes that extend this class
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    // Static methods arent called on instances of the class. 
    // They are called on the class itself.
    // They are often utility functions/variables.
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admin) {
        super(id, 'IT');
        this.admin = admin;
        // 'this' keyword has to come after calling super
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);
// it.addEmployee('Max');
// it.addEmployee('Manu');
it.describe();
// it.printEmployeeInformation();
// console.log(it);
const accounting = AccountingDepartment.getInstance();
accounting.describe();
// console.log(accounting.mostRecentReport);
// accounting.addReport('Something went wrong...');
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
// accounting.printReports();
// accounting.printEmployeeInformation();
// accounting.mostRecentReport = 'Super great report!';
// console.log(accounting.mostRecentReport);
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
