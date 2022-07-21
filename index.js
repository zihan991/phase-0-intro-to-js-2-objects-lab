// Write your solution in this file!
const employee = { 'name' : 'Zihan', 'streetAddress' : '100 Oakland'}


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}

    newObj[key] = value
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value 

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key]
   return employee
}