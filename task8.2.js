function arrayEmp(employees ,maxAge){

    return employees.filter(employee => employee.age < maxAge);


}
const employees = [
    { name: "vivek", age: 25 },
    { name: "atul", age: 30 },
    { name: "rishabh", age: 22 },
    { name: "rohit", age: 35 }
]

console.log(arrayEmp(employees, 30));