// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  let newNum = [];
  for (let i = 0; i < array.length; i++) {
    newNum[i] = add(array[i]);
  }
  return newNum;
}
function add(num) {
  return num + 5000;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = forEach(employeeSalaries, add);

// Using `forEach` function here

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
