// console
// console.log("Hello World");
// console.error("This is an error");
// console.warn("This is a warning");

// variables ( var, let, const )
// let age = 30;
// age = 31;
// console.log(age);

// datatypes (string, numbers, boolean, null, undefined)
const name = 'John';
const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof x);

// Concatenation
// console.log('My name is' + name + 'and I am age');
// console.log(`my name is ${name} and I am ${age}`);

// string property and method
// touppercase substring lowercase
const s = "Hello World";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.split(''));
// const a = s.split("");
// console.log(a);

/* 
 multiline
 comments
*/

// Arrays - variables that hold multiple values
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);
// const fruits = ["apple", "oranges", "pears", 10, true];
// fruits[3] = "grape";
// fruits.push("mangos");
// fruits.unshift("strawberries");
// fruits.pop();
// console.log(Array.isArray());
// console.log(Array.isArray("hello"));
// console.log(fruits);
// console.log("index " + fruits.indexOf("oranges"));

// Object literals
// const person = {
//     firstName : 'John',
//     lastName : 'Doe',
//     age: 30,
//     hobbies : ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city : 'Boston',
//         state: 'MA'
//     }
// }
// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// const { firstName, lastName, address: {city}} = person;
// console.log(firstName);
// const myFirst = person.firstName;
// console.log(myFirst)
// console.log(city);
// person.email = 'john@gmail.com';
// console.log(person);

// Arrays of Object

const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:13,
        text: 'Dentist appt',
        isCompleted: false
    }
];
// console.log(todos);
// console.log(todos[1].text);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
