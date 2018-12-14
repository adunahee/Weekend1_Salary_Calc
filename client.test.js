console.log('Test code should create dummy employee and print them to table along with monthly salary.');

function testCode(){
//creating test employees
const anthony = new Employee('Anthony', 'Dunahee', 4669, 'Aspiring Developer', 23456);
const peter = new Employee('Peter', 'Parker', 2345, 'Delivery Person', 34567);
const wonder = new Employee('Wonder', 'Woman', 1234, 'Superheroine', 12345);

//filling employee array
employees.push(anthony);
employees.push(peter);
employees.push(wonder);

//print monthly and dummy employees
printMonthlySalary();
printEmployeeData();
}