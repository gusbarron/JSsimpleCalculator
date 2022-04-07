function greet(name){
  return "Hello " + name + "!"
}
console.log(greet("Gustavo"));

function displayName(studentName){
  document.write(`
    <h2>Student List</h2>
    <p>Student name: ${studentName}</p>
    <hr>
  `);

  return `<h2>Student List<\h2>

  `
}

function sum(){
  console.log(10+10);
}
let sum2 = function(){
  console.log(3+3);
}
sum2();


let subtotal = 0;

function addCart(price){
  return 1.11*subtotal += price;
}


total = addCart(200);
total = addCart(400);
total = addCart(600);

console.log(`The subtotal is: ${subtotal}`);

const total = taxesCalculation(subtotal);
console.log(`The total isL ${total}`);