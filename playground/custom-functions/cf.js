// // Function Definition
function calculateBill(billAmount, tipRate = 0.15, taxRate = 0.13) {
  // this is the function body
  console.log('Running calculate bill!!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}
// // Function Call or ** Run **
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal);
// // console.log(myTotal);

// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// const greeting = sayHiTo('wes');
// console.log(greeting);

function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

function yell(firstName = 'Silly Goose') {
  return `HEY ${firstName.toUpperCase()}`;
}

const myTotal4 = calculateBill(100, undefined, 0.2);
console.log(myTotal4);
