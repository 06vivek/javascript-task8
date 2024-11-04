function sortEmployees(employees, attribute) {
    return employees.sort((a, b) => {
        if (a[attribute] < b[attribute]) return -1;
        if (a[attribute] > b[attribute]) return 1;
        return 0;
    });
}
const employees = [
    { name: "Alice", age: 25, salary: 50000 },
    { name: "Bob", age: 30, salary: 70000 },
    { name: "Charlie", age: 22, salary: 45000 },
    { name: "David", age: 35, salary: 65000 }
];
console.log(sortEmployees(employees, "age"));
console.log(sortEmployees(employees, "salary"));

