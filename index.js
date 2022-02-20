// Write your solution in this file!
const employee = {
    name: "Max",
    streetAddress: "5 Main Street",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Alternate using ES6 Spread operators:

    return {...employee, [key]: value};
    
  }