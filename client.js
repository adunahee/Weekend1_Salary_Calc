// console.log('JS sourced.');
$(readyNow)

//declaring vars and arrays
const employees = [];
let totMonSal = 0;

//employee class
class Employee{
    constructor(firstName, lastName, ID, salary){
        this.name = firstName + ' ' + lastName;
        this.ID = ID;
        this.salary = salary;
        this.monthlySalary = this.salary/12;
    };
}//end employee class

//currency formatter
const formatterUSD = new Intl.NumberFormat ('en-US' , {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})// end currency formatter

//filling employee array
employees.push(new Employee('Anthony', 'Dunahee', 4669, 23456));
employees.push(new Employee('Peter', 'Parker', 2345, 34567));
employees.push(new Employee('Wonder', 'Woman', 1234, 12345));

function readyNow() {
    // console.log('JQ sourced.');
}

//function that prints monthly salary in table
function printMonthlySalary () {
    for(employee of employees){
        totMonSal += employee.monthlySalary;
    }
    $('#totMonSalCell').html(formatterUSD.format(totMonSal));
    if (totMonSal >= 20000 ) {
        $('tfoot').css('background-color', 'rgba(255, 0, 0, 0.685');
    }
    else {
        $('tfoot').css('background-color', '');
    }
}


