# Weekend Challenge 1: Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 

## Topics Covered
- JavaScript
- jQuery - Selectors, append, and event handling

## Assignment

The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

## Stretch Mode

Create an `Employee` class to store the information about each new employee in an Array.

Add styling or extra functionality that fits with the theme of this assignment.

Once the employee is deleted, update the total spend on salaries account for this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky! 

### Wireframe

![Wireframe](salary-calc-wireframe.png)

###Planning
First commit
create and source files
html layout
initial styling

dec vars/classes/arrs
    create employee class
        name, id, job title, annual salary
    create employees array
    add some employees using constructor
    create monthly salary function that returns salary formatted as a number

create function for printing employees arr into tbody

listener for button click
button click feeds input field to constructor
clears input fields
prints monthly salary
prints employee

delete row on click
    traverse from parent
    remove this
    update monthly

test functions for unusual behavior
require input values for submitting
