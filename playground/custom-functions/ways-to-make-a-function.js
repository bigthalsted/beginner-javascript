// Function

// function doctorize(firstName) {
//   return `Dr ${firstName}`;
// }

// Anonymous function

// function (firstName) {
//   return `Dr ${firstName}`;
// }

// Function expression - stores function as a value in a variable - not hoisted

// const doctorize = function (firstName) {
//   return `Dr ${firstName}`;
// };

// Arrow function - are anonymous functions

// const inchToCM = (inches) => inches * 2.54;

// const add = (a, b = 3) => a + b;

// // returning an object

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately invoked function expression

(function (age) {
  return `You are cool and age ${age}`;
})(10);

// Methods !!! function that lives inside of an object

const wes = {
  name: 'westopher bos',
  // Method!
  sayHi() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand method
  yellHi() {
    console.log(`HEY ${this.name.toUpperCase()}`);
  },
  // Arrow function
  wisperHi: () => {
    console.log('hiii wesss im a mouseeee');
  },
};

// Callback Functions a regular function for something that will happen when something is done "when somebody clicks something do this"

// click callback

const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!!');
}

button.addEventListener('click', () => {
  console.log('Nice Job!!');
});

// timer callback
setTimeout(() => {
  console.log('done time to eat');
}, 2000);
