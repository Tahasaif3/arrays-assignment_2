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
var employees = [{
        name: "Harshad",
        hoursWorked: 800,
        hourlyRate: 100,
        salary: 100000,
    },
    {
        name: "Hammad",
        hoursWorked: 700,
        hourlyRate: 100,
        salary: 100000,
    },
    {
        name: "Ahmed",
        hoursWorked: 900,
        hourlyRate: 150,
        salary: 100000,
    }
];
function calculateSalary(employee) {
    employee.forEach(function (employee) {
        employee.salary = employee.hoursWorked * employee.hourlyRate;
        if (employee.hoursWorked >= 20) {
            employee.salary *= 1.20;
            console.log("Bonus Salary");
        }
    });
}
calculateSalary(employees);
console.log(employees);
employees.forEach(function (employee) { return (console.log("Employee:".concat(employee.name, ",Salary:").concat(employee.salary))); });
