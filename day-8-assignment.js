// Create an object named employee
let employee = {
    id: 1,
    name: "Sijal",
    department: "IT",
    salary: 50000
};

// Display the original object
console.log("Original Object:", employee);

// Add a new property address
employee.address = "Kathmandu";

// Update the salary
employee.salary = 60000;

// Delete the department property
delete employee.department;

// Display the updated object
console.log("Updated Object:", employee);