// // =========== part-1 :BASIC ARRAY ============
/*
1. Define a type alias named Product to represent a product with the following
properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each
product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new
color as input. This function should update the color property of the product and
adjust the price based on the new color (implement your own logic, e.g., increase by
10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the
products array and print each product's details.*/

// type Product  = {
//     name:string;
//     price:number;
//     inventory:{
//         stock:number;
//         colorOptions:string[];
//     }
// }

// let products:Product[] = [{
//     name:"samsung s24 ultra",
//     price:500000,
//     inventory:{
//         stock:2000,
//         colorOptions:["white","titanium","black"],
//     }},
//     {
//         name:"iphone 14 pro",
//         price:300000,
//         inventory:{
//             stock:3000,
//             colorOptions:["white","titanium","black","purple"],
//     }},
//     {
//         name:"Watch ultra",
//         price:100000,
//         inventory:{
//             stock:1000,
//             colorOptions:["black","white","silver"],
//     }},
// ]
// function changeColor(products:Product,newColor:string) {
//     products.inventory.colorOptions.push(newColor);
//     if (newColor === "Red") {
//         products.price += products.price*0.20
//     } else if (newColor === "Pink") {
//         console.log(products.price += products.price*0.15);
//     } else if (newColor === "Yellow") {
//         console.log(products.price += products.price*0.45);
//     } else if (newColor === "Green") {
//         console.log(products.price += products.price*0.10);
//     } else {
//         console.log(`sorry this ${newColor} is not available in stock`);
//     }
// }
// function displayProductDetails(product:Product[]) {
//     product.forEach(products => {
//         console.log(`Name:${products.name}`);
//         console.log(`Price:${products.price}`);
//         console.log(`Stock:${products.inventory.stock}`);
//         console.log(`Available Colors:${products.inventory.colorOptions}`);
//     });
// }
// changeColor(products[0],"red"),
// changeColor(products[1], "pink")
// changeColor(products[2], "purple")
// displayProductDetails(products) 

//  Challenge:
/*You are tasked with creating a student grading system. Implement functions and logic to
manage student grades effectively.
1. Define a TypeScript type alias named Student to represent a student with the
following properties:
• name (string): The name of the student.
• grades (number[ ]): An array of grades for different subjects.
2. Create an array named students containing at least three student objects. Each student
object should include a name and an array of grades.
3. Implement a function named calculateAverageGrade that takes a student's grades as
input and returns the average grade for that student.
4. Display each student's name and average grade. Iterate through the students array,
calculate the average grade for each student using the calculateAverageGrade
function, and print their name and average grade.*/

// type Student = {
//     name:string;
//     grades:number[];
// }
// let student:Student[]= [{
//     name:"Taha",
//     grades:[98,76,90],
// },
// {
//     name:"Ashad",
//     grades:[88,67,98],
// },
// {
//     name:"Ahmed",
//     grades:[77,98,90],
// }
// ];
// function calculateAverageGrade(grades:number[]) {
//     let total = 0;
//     for(let grade of grades) {
//         total += grade;
//     }
//     return total / grades.length;
// } student.forEach(student => {
//     const averageGrade = calculateAverageGrade(student.grades)
//     console.log(`${student.name}: Average Grade = ${averageGrade.toFixed(2)}`);
// });

// Part 3: Array with Types and Indexing - Employee Salaries
// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.
// 2. Define an array named employees containing employee objects. Each employee
// object should include a name, hoursWorked, hourlyRate, and salary.
// 3. Implement a function named calculateSalary that calculates the salary for each
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.

//  type Employee = {
//     name:string;
//     hoursWorked:number;
//     hourlyRate:number;
//     salary:number;
//  }

//  let employees:Employee[] = [{
//      name:"Harshad",
//      hoursWorked:800,
//      hourlyRate:100,
//      salary:100000,
//  },
//  {
//     name:"Hammad",
//     hoursWorked:700,
//     hourlyRate:100,
//     salary:100000,
//  },
//  {
//  name:"Ahmed",
//  hoursWorked:900,
//  hourlyRate:150,
//  salary:100000,
//  }
// ]
// function calculateSalary(employee:Employee[]) {
//     employee.forEach(employee => {
//         employee.salary = employee.hoursWorked * employee.hourlyRate;
//         if (employee.hoursWorked >= 20) {
//             employee.salary *= 1.20;
//             console.log("Bonus Salary");
//         }
//     });
// }
// calculateSalary(employees);
//  console.log(employees)
//  employees.forEach(employee =>
// (console.log(`Employee:${employee.name},Salary:${employee.salary}`)));