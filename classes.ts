abstract class Department {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;

    // Private restricts access to this class;
    // Protected allows access to classes that extend this class
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    // Static methods arent called on instances of the class. 
    // They are called on the class itself.
    // They are often utility functions/variables.
    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admin: string[]) {
        super(id, 'IT');
        // 'this' keyword has to come after calling super
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
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

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
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