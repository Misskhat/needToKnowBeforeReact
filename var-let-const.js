// What is the work of var, let and const, and there uses

console.log(name); //output: undefined
var name = 'Variable'; //you may re-assign this value.
name = 'variables of JS';

console.log(name); //output: variables of JS

console.log(name2); //output: ReferenceError: Cannot access 'name2' before initialization
let name2 = 'JS'; // you may re-assign this value.
name2 = 'JavaScript'; 

console.log(name2); //output: JavaScript;

//So, we use let because var is the old version and var hoisting the variable to top. Note, var only hoisting the variable not the value.

const number = 34;
number = 20;

console.log(number); //output: TypeError: Assignment to constant variable.

//const is fixed, it's not accept re-assign.