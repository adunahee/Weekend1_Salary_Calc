// console.log('JS sourced.');
$(readyNow)

//declaring vars and arrays
const employees = [];

//employee class
class Employee{
    constructor(firstName, lastName, ID, title, salary){
        this.name = firstName + ' ' + lastName;
        this.ID = ID;
        this.title = title;
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

function readyNow() {
    // to run test code ensure client.test.js is NOT commented out
    $('#addEmployeeButton').on('click', addEmployee )
    testCode();
}

//function that prints monthly salary in table
function printMonthlySalary () {
    let totMonSal = 0;
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

//adds table row with employee data
function printEmployeeData() {
    $('tbody').empty();
    for(employee of employees)
    $('tbody').append('<tr><td>' + employee.name + '</td><td>' + employee.ID + '</td><td>' + employee.title + '</td><td>' + formatterUSD.format(employee.salary) + '</td></tr>');
}

//grabs employee data from input fields for contsructor, clears inputs, updates table
function addEmployee() {
    employees.push(new Employee($('#fName').val(), $('#lName').val(), $('#empNum').val(), $('#title').val(), $('#annSal').val()));
    $('input').val('');
    printEmployeeData();
    printMonthlySalary();
}