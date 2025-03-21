"use strict";
// interface
function greet(user) {
    console.log("Hello ".concat(user.name, ", Your age is ").concat(user.age));
}
greet({ name: "amaan", age: 24 });
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
