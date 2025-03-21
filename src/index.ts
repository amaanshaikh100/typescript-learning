// interface
interface UserType {
  firstName: string;
  lastName: string;
  age: number;
}

function greet(user: UserType) {}

let user: UserType = {
  firstName: "amaan",
  lastName: "shaikh",
  age: 24,
};

// objects
// function greet(user: { name: string; age: number }) {
//   console.log(`Hello ${user.name}, Your age is ${user.age}`);
// }

// greet({ name: "amaan", age: 24 });

// const user: {
//   firstName: string;
//   age: number;
// } = {
//   firstName: "amaan",
//   age: 24,
// };

// es20
// let greet = () => console.log("hi there");

// Type of function receiving a function as a parameter
// function delayedCall(fn: () => void) {
//   setTimeout(fn, 1000);
// }

// delayedCall(function () {
//   console.log("Hello");
// });

// Number type
// function sum(a: number, b: number): number {
//   return a + b;
// }

// let ans = sum(2, 4);
// console.log(ans);

// String type
// function greets(firstName: String) {
//   return `Hello ${firstName}`;
// }

// const greetUser = greets("Amaan");
// console.log(greetUser);
