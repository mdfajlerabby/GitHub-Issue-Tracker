1️⃣ What is the difference between var, let, and const?

In JavaScript, var, let, and const are used to declare variables, but they behave differently in terms of scope, redeclaration, and reassignment.

var is the older way of declaring variables in JavaScript. It is function-scoped, meaning the variable is accessible anywhere within the function it is declared in. Variables declared with var can also be redeclared and reassigned, which sometimes causes unexpected behavior in large programs.

Example:

var name = "John";
var name = "Mike"; // redeclaration allowed

let was introduced in ES6. It is block-scoped, which means it only exists inside the block {} where it is declared. Unlike var, a variable declared with let cannot be redeclared in the same scope, but it can be reassigned.

Example:

let age = 20;
age = 25; // allowed

const is also block-scoped like let, but it is used for variables whose values should not change. Once a value is assigned to a const variable, it cannot be reassigned.

Example:

const country = "Bangladesh";

In summary:

var → function scoped, can redeclare and reassign

let → block scoped, cannot redeclare but can reassign

const → block scoped, cannot redeclare or reassign

2️⃣ What is the spread operator (...)?

The spread operator (...) in JavaScript is used to expand or unpack elements of an array or object. It allows us to copy, merge, or pass multiple values easily.

For example, if we have an array:

const numbers = [1, 2, 3];

Using the spread operator, we can create a copy of the array:

const newNumbers = [...numbers];

We can also combine arrays:

const arr1 = [1, 2];
const arr2 = [3, 4];

const result = [...arr1, ...arr2];

Result:

[1, 2, 3, 4]

The spread operator makes code shorter, cleaner, and easier to read.

3️⃣ What is the difference between map(), filter(), and forEach()?

These three are common array methods in JavaScript used to work with array elements, but they serve different purposes.

map() is used to transform each element of an array and return a new array. The length of the new array remains the same.

Example:

const numbers = [1, 2, 3];

const doubled = numbers.map(num => num \* 2);

Result:

[2, 4, 6]

filter() is used to select specific elements from an array based on a condition. It also returns a new array, but the length may be smaller.

Example:

const numbers = [1, 2, 3, 4];

const even = numbers.filter(num => num % 2 === 0);

Result:

[2, 4]

forEach() is used to execute a function for each array element, but it does not return a new array.

Example:

const numbers = [1, 2, 3];

numbers.forEach(num => {
console.log(num);
});

Summary:

Method Returns New Array Purpose
map() Yes Transform data
filter() Yes Select specific items
forEach() No Loop through elements

4️⃣ What is an arrow function?

An arrow function is a shorter and more modern way to write functions in JavaScript. It was introduced in ES6 and helps make code cleaner and more concise.

Traditional function example:

function add(a, b) {
return a + b;
}

Arrow function version:

const add = (a, b) => {
return a + b;
};

If the function has only one line, it can be written even shorter:

const add = (a, b) => a + b;

Arrow functions are commonly used in array methods like map(), filter(), and forEach() because they make the code shorter and easier to read.

5️⃣ What are template literals?

Template literals are a modern way to work with strings in JavaScript. They were introduced in ES6 and allow us to embed variables and expressions directly inside strings.

Template literals use backticks ( ) instead of single or double quotes.

Example:

const name = "John";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;

Output:

My name is John and I am 25 years old.

Template literals make it easier to combine strings and variables without using the + operator.

They also support multi-line strings, which was difficult before ES6.

Example:

const text = `Hello
Welcome to JavaScript`;
